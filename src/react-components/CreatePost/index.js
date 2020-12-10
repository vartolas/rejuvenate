import { TransferWithinAStation } from "@material-ui/icons";
import React from "react";
import { Form, Button } from "react-bootstrap";
// import { addPost } from "../../actions/post";

import "./styles.css";

export default class CreatePost extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			createPostImage: null
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
				this.setState({createPostImage: image});
			}
		}
	}

	displayUploadedImage(){
		if (this.state.createPostImage) {
			return (
				<div id="createPostImageContainer">
					<img src={this.state.createPostImage.src} alt="yourUploadedImg"></img>
					<button onClick={() => this.setState({createPostImage: null})}>remove picture</button>
				</div>
			);
		}
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
								value={tag}
								onChange={handleInputChange}
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
								value={text}
								onChange={handleInputChange}
							/>

							<input
								type="file"
								name="picture"
								id="file"
								className="inputPicture"
								onChange={this.handleImageUpload}
							/>
							<label for="file">Choose Picture</label>

							{this.displayUploadedImage()}
						</Form.Group>
						<Button
							variant="primary"
							type="button"
							className="postButton"
							onClick={addPost}
						>
							Post
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}
