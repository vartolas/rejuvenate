import React from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addLike, removeLike, addComment } from "../../actions/post";
import { getLoggInUser, getUsers } from "../../userData";

import "./styles.css";

export default class PostEntry extends React.Component {
	constructor(props) {
		super(props);
		const likes = this.props.entry.likes;
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

	onKeyUp(event) {
		if (event.key === "Enter") {
			const commentText = event.target.value;
			addComment(
				this.props.entry,
				this.props.listComponent,
				commentText,
				this.state.currentUid
			);
		}
	}

	displayRemoveButton() {
		return(
			<div onClick={ () => this.props.removePost(this.props.entry.pid) } className='removeButton postRemoveButton'></div>
		)
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

		//Setting the maximum number of posts to 3.

		// if (comments.length > 3) {
		// 	showcomments = comments.slice(0, 3);
		// } else {
		// 	showcomments = comments;
		// }

		//Remove this if there is a maxmum number of posts
		showcomments = comments;

		showcomments.forEach((usercomment) => {
			const commentUser = users[usercomment.uid];
			commentRows.push(
				<ListGroup.Item className="commentListItem" key={uuid()}>
					{ this.props.removable ? <div onClick={ () => this.props.removeComment(usercomment.cid) } className='removeButton commentRemoveButton'></div> : '' }
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
			<div className="postEntryContainer">
				{ this.props.removable ? this.displayRemoveButton() : '' }
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
				<div className="comments">
					<ListGroup className="commentSection">{commentRows}</ListGroup>
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
