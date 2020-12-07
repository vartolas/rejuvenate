import React from "react";
import { Form, Button } from "react-bootstrap";
// import { addPost } from "../../actions/post";

import "./styles.css";

export default class CreatePost extends React.Component {
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
								value={picture}
							/>
							<label for="file">Choose Picture</label>
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
