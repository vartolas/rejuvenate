// import { getUsers, setLikes } from "../userData";

export const addLike = (currentPost, listComponent, uid) => {
	const index = listComponent.state.posts.findIndex(
		(entry) => entry === currentPost
	);
	if (index !== -1) {
		const newPosts = listComponent.state.posts;
		newPosts[index].likes.push(uid);

		listComponent.setState({
			posts: newPosts,
		});
	}
};

export const removeLike = (currentPost, listComponent, uid) => {
	const index = listComponent.state.posts.findIndex(
		(entry) => entry === currentPost
	);
	if (index !== -1) {
		let newPosts = listComponent.state.posts;
		let newLikes = newPosts[index].likes;
		newPosts[index].likes = newLikes.filter((user) => user !== uid);

		listComponent.setState({
			posts: newPosts,
		});
	}
};

export const addPost = (postComponent) => {
	const postList = postComponent.state.posts;

	const post = {
		tag: postComponent.state.tag,
		content: {
			text: postComponent.state.text,
			have_pic: postComponent.state.have_pic,
			picture: postComponent.state.picture,
		},
		uid: 0,
		comments: [],
		likes: [],
	};

	postList.splice(0, 0, post);
	postComponent.setState({
		tag: "General",
		text: "",
		have_pic: 0,
		picture: "",
		posts: postList,
	});
};
