import React from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CancelIcon from "@material-ui/icons/Cancel";
import { addLike, removeLike, addComment } from "../../actions/post";
import LoadingDisplay from "../../react-components/LoadingDisplay";

import "./styles.css";

export default class PostEntry extends React.Component {
	constructor(props) {
		super(props);
		const {
			userid,
			tag,
			text,
			timestamp,
			image,
			comments,
			likes,
		} = this.props.entry;

		this.state = {
			liked: likes.includes(userid),
			num_likes: likes.length,
			postUser: null,
			commentRows: null,
		};
	}

	componentDidMount() {
		const {
			userid,
			tag,
			text,
			timestamp,
			image,
			comments,
			likes,
		} = this.props.entry;

		fetch(`/api/users/${userid}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({ postUser: json });
			});

		const commentRows = [];
		let showcomments = [];

		//Setting the maximum number of posts to 3.

		// if (comments.length > 3) {
		// 	showcomments = comments.slice(0, 3);
		// } else {
		// 	showcomments = comments;
		// }

		//Remove this if there is a maxmum number of posts
		showcomments = comments;

		if (showcomments.length === 0) {
			this.setState({ commentRows: [] });
		} else {
			showcomments.forEach((usercomment) => {
				const commentUserId = usercomment.userid;
				fetch(`/api/users/${commentUserId}`)
					.then((res) => res.json())
					.then((json) => {
						commentRows.push(
							<ListGroup.Item className="commentListItem" key={uuid()}>
								{this.props.removable ? (
									//TODO: maybe modify this
									<IconButton
										id="commentRemoveButton"
										onClick={() => this.props.removeComment(usercomment.cid)}
									>
										<CancelIcon id="commentCancelIcon" />
									</IconButton>
								) : (
									""
								)}
								<div className="commentuser">{json.username}</div>
								<div className="comment">{usercomment.text}</div>
							</ListGroup.Item>
						);

						this.setState({ commentRows: commentRows });
					});
			});
		}
	}

	handleLike() {
		fetch(`/api/posts/${this.props.entry._id}/like`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userid: this.props.app.state.user._id }),
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
			});

		// Update frontend so that it matches the new status after refresh
		if (this.state.liked) {
			this.setState({
				liked: false,
				num_likes: this.state.num_likes - 1,
			});
		} else {
			this.setState({
				liked: true,
				num_likes: this.state.num_likes + 1,
			});
		}
	}

	onKeyUp(event) {
		if (event.key === "Enter") {
			const commentText = event.target.value;

			fetch(`/api/posts/${this.props.entry._id}/comment`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userid: this.props.app.state.user._id,
					text: commentText,
				}),
			})
				.then((res) => res.json())
				.then((json) => {
					console.log(json);
					event.target.value = "";
				});
		}
	}

	displayRemoveButton() {
		return (
			//TODO: maybe modify this
			<IconButton
				id="postRemoveButton"
				onClick={() => this.props.removePost(this.props.entry.pid)}
			>
				<CancelIcon id="cancelIcon" />
			</IconButton>
		);
	}

	render() {
		const {
			userid,
			tag,
			text,
			timestamp,
			image,
			comments,
			likes,
		} = this.props.entry;

		const imageContainer = [];

		if (image) {
			imageContainer.push(
				<img className="img" src={image.image_url} key={uuid()} />
			);
		}

		if (this.state.postUser == null || this.state.commentRows == null) {
			return <LoadingDisplay />;
		} else {
			return (
				<div className="postEntryContainer">
					{this.props.removable ? this.displayRemoveButton() : ""}
					<div className="tag">{tag}</div>
					<div className="user">
						<img
							className="avatar"
							src={
								this.state.postUser.profilePicture
									? this.state.postUser.profilePicture.image_url
									: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
							}
							alt=""
						/>
						<div className="username">{this.state.postUser.username}</div>
					</div>
					<div className="text">{text}</div>
					<div className="imageContainer">{imageContainer}</div>

					<div className="likes">
						<IconButton
							className="likeButton"
							onClick={() => this.handleLike()}
						>
							{this.state.liked ? (
								<FavoriteIcon className="filledLikeIcon" />
							) : (
								<FavoriteBorderIcon className="likeIcon" />
							)}
						</IconButton>
						<div className="likeNum">{this.state.num_likes}</div>
					</div>
					<div className="comments">
						<ListGroup className="commentSection">
							{this.state.commentRows}
						</ListGroup>
						<Form.Control
							className="commentInput"
							type="text"
							placeholder="Write Your Comment!"
							onKeyPress={this.onKeyUp.bind(this)}
						/>
					</div>
				</div>
			);
		}
	}
}
