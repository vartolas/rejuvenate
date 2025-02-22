import React from "react";
import "./styles.css";
import loginConstant from "./../../constants/login/login_constants.js";

import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

// TODO: Convert this to a functional component.
export default class Login extends React.Component {
	// I found this helpful:
	// - https://reactjs.org/docs/forms.html
	// - https://material-ui.com/components/text-fields/
	// - https://material-ui.com/components/buttons/#text-buttons
	// - https://material-ui.com/api/form-control/

	constructor(props) {
		super(props);
		// TODO: Use React hooks and useState instead.
		this.state = {
			username: "",
			password: "",
			lastActionWasLoginAttempt: false
		};
	}

	updateUsername = (e) => {
		e.preventDefault();
		this.setState({ username: e.target.value, lastActionWasLoginAttempt: false });
	}

	updatePassword = (e) => {
		e.preventDefault();
		this.setState({ password: e.target.value, lastActionWasLoginAttempt: false  });
	}

	// TODO: In phase 2, we plan on verifying user credentials against a database.
	usernameExists() {
		return this.state.username === loginConstant.CORRECT_REGULAR_USER_USERNAME;
	}

	// TODO: In phase 2, we plan on verifying admin credentials against a database.
	adminUsernameExists() {
		return this.state.username === loginConstant.CORRECT_ADMIN_USERNAME;
	}

	// TODO: In phase 2, we plan on verifying user credentials against a database.
	userPasswordIsCorrect(username) {
		return this.state.password === loginConstant.CORRECT_REGULAR_USER_PASSWORD;
	}

	// TODO: In phase 2, we plan on verifying admin credentials against a database.
	adminPasswordIsCorrect(username) {
		return this.state.password === loginConstant.CORRECT_ADMIN_PASSWORD;
	}

	logIn = () => {
		fetch(`/api/login`, {
			method: 'post',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			}),
		}).then(response => {
			if (response.status === 200) {
				this.props.history.push('/home'); // go to user home
			} else {
				// login attempt has failed, handle notifying user somehow
				console.log("login attempt failed"); // do whatever here
				this.setState({lastActionWasLoginAttempt: true});
			}
		});
		// if (this.usernameExists() && this.userPasswordIsCorrect()) {
		// 	this.props.history.push('/home')
		// } else if (this.adminUsernameExists() && this.adminPasswordIsCorrect()) {
		// 	this.props.history.push('/admin home')
		// } else {
		// 	this.setState({lastActionWasLoginAttempt: true})
		// }
	}

	helperText() {
		if (this.state.lastActionWasLoginAttempt) {
			return loginConstant.INCORRECT_CREDENTIAL_MSG;
		} else {
			return "";
		}
	}

	render() {
		return (
			<div id="loginContainer">
				<h1 id="title">Rejuvenate</h1>
				<div id="loginComponent">
					<FormControl>
						<TextField
							id="usernameTextbox"
							value={this.state.username}
							onChange={this.updateUsername}
							label="Username"
							error={this.helperText.call(this) !== ""}
						/>
						<TextField
							id="passwordTextbox"
							value={this.state.password}
							onChange={this.updatePassword}
							label="Password"
							type="password"
							error={this.helperText.call(this) !== ""}
							helperText={this.helperText.call(this)}
						/>
						<br></br>
						<Button
							className="loginButton"
							onClick={this.logIn}
							variant="contained"
							disabled={!this.state.username
								|| !this.state.password}
						>
							Log In
						</Button>
						<Button
							className="loginButton"
							href="/register"
							variant="contained"
							
						>
							Sign Up
						</Button>
						<Button
							className="loginButton"
							href="/password reset"
							variant="contained"
							
						>
							Reset Password
						</Button>
					</FormControl>
				</div>
			</div>
		);
	}
}
