// import { getUsers, setLikes } from "../userData";
const HOST_URL = process.env.HOST_URL || "http://localhost:5000";

// export const getPosts = (listComponent) => {
// 	// the URL for the request
// 	const url = "/api/post";

// 	// Since this is a GET request, simply call fetch on the URL
// 	fetch(url)
// 		.then((res) => {
// 			if (res.status === 200) {
// 				// return a promise that resolves with the JSON body
// 				return res.json();
// 			} else {
// 				alert("Could not get posts");
// 			}
// 		})
// 		.then((json) => {
// 			// the resolved promise with the JSON body
// 			listComponent.setState({ posts: json.result });
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };

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
	// const postList = postComponent.state.posts;
	console.log("here");
	// the URL for the request
	const url = HOST_URL.concat("/api/post");

	let post;

	if (postComponent.state.image === "") {
		post = {
			userid: postComponent.state.userid,
			title: postComponent.state.title,
			text: postComponent.state.text,
			image: null,
		};
	} else {
		post = {
			userid: postComponent.state.userid,
			title: postComponent.state.title,
			text: postComponent.state.text,
			image: postComponent.state.image,
		};
	}

	console.log(post);

	// Create our request constructor with all the parameters we need
	const request = new Request(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(post),
	});

	console.log(request);

	// Send the request with fetch()
	fetch(request)
		.then(function (res) {
			// Handle response we get from the API.
			// Usually check the error codes to see what happened.
			if (res.status === 200) {
				// Post was added successfully
				console.log("post created successfully");
			} else {
				console.log(res.status);
				// Post was not added
				console.log("post not created");
			}
		})
		.catch((error) => {
			console.log(error);
		});

	// postList.splice(0, 0, post);
	postComponent.setState({
		title: "General",
		text: "",
		picture: "",
	});
};

export const addComment = (currentPost, listComponent, commentText, userid) => {
	const comment = {
		uid: userid,
		comment: commentText,
	};

	const index = listComponent.state.posts.findIndex(
		(entry) => entry === currentPost
	);

	if (index !== -1) {
		const newPosts = listComponent.state.posts;
		newPosts[index].comments.push(comment);

		listComponent.setState({
			posts: newPosts,
		});
	}
};
