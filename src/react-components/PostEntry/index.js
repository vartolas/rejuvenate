import React from "react";
import { ListGroup } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addLike, removeLike } from "../../actions/post";
import { getLoggInUser, getUsers } from "../../userData";

import "./styles.css";

export default class PostEntry extends React.Component {
	constructor(props) {
		super(props);
		const likes = this.props.entry.likes;
		// console.log(likes);
		const currentUid = getLoggInUser();
		this.state = {
			liked: likes.includes(currentUid),
			currentUid: currentUid,
		};
	}

	handleLike() {
		if (this.state.liked) {
			removeLike(
				this.props.entry,
				this.props.listComponent,
				this.state.currentUid
			);
			this.setState({
				liked: false,
			});
		} else {
			addLike(
				this.props.entry,
				this.props.listComponent,
				this.state.currentUid
			);
			this.setState({
				liked: true,
			});
		}
	}

	render() {
		const { tag, content, uid, comments, likes } = this.props.entry;
		const users = getUsers();
		let user = null;
		Object.keys(users).forEach((key) => {
			if (key === uid.toString()) {
				user = users[key];
			}
		});
		const commentRows = [];
		let showcomments = [];

		if (comments.length > 3) {
			showcomments = comments.slice(0, 3);
		} else {
			showcomments = comments;
		}

		showcomments.forEach((usercomment) => {
			const commentUser = users[usercomment.uid];
			commentRows.push(
				<ListGroup.Item className="commentListItem" key={uuid()}>
					<div className="commentuser">{commentUser.username}</div>
					<div className="comment">{usercomment.comment}</div>
				</ListGroup.Item>
			);
		});

		const image = [];

		if (content.have_pic === 1) {
			image.push(<img className="img" src={content.picture} key={uuid()} />);
		}

		return (
			<div className="PostEntryContainer">
				<div className="tag">{tag}</div>
				<div className="user">
					<img className="avatar" src={user.profilePic} alt="" />
					<div className="username">{user.username}</div>
				</div>
				<div className="text">{content.text}</div>
				<div className="imageContainer">{image}</div>

				<div className="likes">
					<IconButton className="likeButton" onClick={() => this.handleLike()}>
						{this.state.liked ? (
							<FavoriteIcon className="filledLikeIcon" />
						) : (
							<FavoriteBorderIcon className="likeIcon" />
						)}
					</IconButton>
					<div className="likeNum">{likes.length}</div>
				</div>
				<ListGroup className="commentSection">{commentRows}</ListGroup>
			</div>
		);
	}
}
