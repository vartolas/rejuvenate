export const addLike = (post, listComponent, uid) => {
	const index = listComponent.state.posts.findIndex((entry) => entry === post);

	if (index !== -1) {
		listComponent.state.posts[index].likes.push(uid);
	}
};

export const removeLike = (post, listComponent, uid) => {
	const index = listComponent.state.posts.findIndex((entry) => entry === post);

	if (index !== -1) {
		listComponent.state.posts[index].likes = listComponent.state.posts[
			index
		].likes.filter((user) => user !== uid);
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
		user: {
			username: postComponent.state.username,
			avatar: postComponent.state.avatar,
		},
		comments: [],
		likes: "0",
	};

	console.log(post);

	postList.splice(0, 0, post);
	postComponent.setState({
		posts: postList,
	});

	console.log(postComponent.state.posts);
};
