import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FriendList from "../../react-components/FriendList";
import PostList from "../../react-components/PostList";
import { getCurrentUsers, getUsers } from "../../userData";

export default class Home extends React.Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		const allPosts = [];
		const users = getUsers();
		Object.keys(users).forEach((key) => {
			users[key].posts.forEach((post) => {
				allPosts.push(post);
			});
		});
		// users.forEach((user) => console.log(user));

		this.setState({
			posts: allPosts,
		});
		console.log(allPosts);
	}

	render() {
		const friends = [
			{
				name: "Ben",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "Jack",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "Abby",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "George",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "Olivia",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "Emily",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "User",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "User",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "User",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "User",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "User",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
			{
				name: "User",
				avatar:
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
			},
		];
		return (
			<div id="homeContainer">
				<div id="friendListContainer">
					<FriendList entries={friends} />
				</div>
				<div id="postListContainer">
					<PostList posts={this.state.posts} listComponent={this} />
				</div>
				<div id="postButtonContainer">
					<Link
						to="/home/create"
						// state: {
						// 	postComponent: this.state,
						// 	// addPost: addPost(this),
						// 	// handleInputChange: this.state.handleInputChange,
						// },
					>
						<IconButton id="postButton">
							<AddCircleIcon id="cicleIcon" style={{ fontSize: 60 }} />
						</IconButton>
					</Link>
				</div>
			</div>
		);
	}
}
