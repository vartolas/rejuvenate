import React from "react";
import "./styles.css";
// import { Link } from "react-router-dom";
// import { IconButton } from "@material-ui/core";
// import AddCircleIcon from "@material-ui/icons/AddCircle";
import FriendList from "../../react-components/FriendList";
import PostList from "../../react-components/PostList";
import CreatePost from "../../react-components/CreatePost";
import { addPost } from "../../actions/post";
import { getCurrentUsers, getUsers } from "../../userData";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		const allPosts = [];
		const users = getUsers();
		Object.keys(users).forEach((key) => {
			users[key].posts.forEach((post) => {
				allPosts.push(post);
			});
		});

		this.state = {
			posts: allPosts,
			tag: "General",
			text: "",
			have_pic: 0,
			picture: "",
			username: "MEEEEEE",
			profilePic:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
		};

		console.log(this.state);
	}

	// Generic handler for whenever we type in an input box.
	// We change the state for the particular property bound to the textbox from the event.
	handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		// log(name)

		// 'this' is bound to the Queue component in this arrow function.
		//  In arrow functinos, 'this' is bound to the enclosing lexical function/global scope
		//  where it is *defined*.  This is different than 'this' in normal functions,
		//  which are bound at the call-site.
		this.setState({
			[name]: value, // [name] sets the object property name to the value of the `name` variable.
		});
	};

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
					<CreatePost
						posts={this.state.posts}
						tag={this.state.tag}
						text={this.state.text}
						have_pic={this.state.have_pic}
						picture={this.state.picture}
						username={this.state.username}
						profilePic={this.state.profilePic}
						handleInputChange={this.handleInputChange}
						addPost={() => addPost(this)}
					/>
					<PostList posts={this.state.posts} listComponent={this} />
				</div>
			</div>
		);
	}
}
