import { TransferWithinAStation } from "@material-ui/icons";
import React from "react";
import { Form, Button } from "react-bootstrap";
// import { addPost } from "../../actions/post";

import "./styles.css";

export default class CreatePost extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			image_url: null,
			text: "",
			tag: "General"
		}
	}

	handleImageUpload(e) {
		var fileUpload = e.target;
		console.log("yes")
		console.log(e.target);
		if('files' in fileUpload) {
			console.log("iwuhfsd")
			if(fileUpload.files.length > 0) {
				var image = fileUpload.files[0];
				this.setState({image_url: URL.createObjectURL(image)});
			}
		}
	}

	displayUploadedImage(){
		if (this.state.image_url) {
			return (
				<div id="image_urlContainer">
					<img src={this.state.image_url} alt="yourUploadedImg"></img>
					<button onClick={() => this.setState({image_url: null})}>remove picture</button>
				</div>
			);
		}
	}

	createPost(e) {
		e.preventDefault();
		console.log(this.props.app.state.user._id)
		fetch(`/api/posts`, {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userid: this.props.app.state.user._id,
				tag: this.state.tag,
				text: this.state.text,
				image_url: this.state.image_url,

			})
		})
		.then(res => res.json())
		.then(json => {
			console.log("created post!");
		});
	}

	handleTextChange(){

	}

	render() {
		const {
			posts,
			tag,
			text,
			have_pic,
			picture,
			handleInputChange,
			addPost,
		} = this.props;
		return (
			<div className="createPostContainer">
				<div className="createPostComponent">
					<Form className="createPost">
						<Form.Group controlId="Tag">
							<Form.Label className="tagLabel">Tag</Form.Label>
							<Form.Control
								as="select"
								className="tagSelect"
								name="tag"
								value={this.state.tag}
								onChange={(e) => this.setState({tag: e.target.value})}
							>
								<option className="tagSelect">General</option>
								<option className="tagSelect">Fitness</option>
								<option className="tagSelect">Recipe</option>
								<option className="tagSelect">Sleep</option>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="Body">
							<Form.Label className="contentLabel">Post Content</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								className="contentInput"
								name="text"
								value={this.state.text}
								onChange={(e) => this.setState({text: e.target.value})}
							/>
							<input
								type="file"
								accept="/image/*"
								name="picture"
								id="file"
								className="inputPicture"
								onChange={this.handleImageUpload.bind(this)}
							/>
							<label htmlFor="file">Choose Picture</label>

							{this.displayUploadedImage()}
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
							className="postButton"
							onClick={this.createPost.bind(this)}
						>
							Post
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}
