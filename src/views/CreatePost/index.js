import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";

export default class CreatePost extends React.Component {
	render() {
		return (
			<div className="createPostContainer">
				<Form className="createPost">
					<Form.Group controlId="Tag">
						<Form.Label className="tagLabel">Tag</Form.Label>
						<Form.Control as="select" className="tagSelect">
							<option className="tagSelect">General</option>
							<option className="tagSelect">Fitness</option>
							<option className="tagSelect">Recipie</option>
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="Body">
						<Form.Label className="contentLabel">Post Content</Form.Label>
						<Form.Control as="textarea" rows={8} className="contentInput" />

						<input type="file" name="file" id="file" class="inputPicture" />
						<label for="file">Choose Picture</label>
					</Form.Group>

					<Button variant="primary" type="submit" className="postButton">
						Post
					</Button>
					<Link to="/home">
						<Button variant="primary" type="button" className="postButton">
							Cancel
						</Button>
					</Link>
				</Form>
			</div>
		);
	}
}
