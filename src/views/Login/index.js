import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const CORRECT_REGULAR_USER_USERNAME = "user";
export const CORRECT_REGULAR_USER_PASSWORD = "user";
export const CORRECT_ADMIN_USERNAME = "admin";
export const CORRECT_ADMIN_PASSWORD = "admin";

export const INCORRECT_USERNAME_ERROR_MSG = "Username is incorrect.";
export const INCORRECT_PASSWORD_ERROR_MSG = "Password is incorrect.";
export const INCORRECT_CREDENTIAL_MSG = "Invalid credentials.";

const HOST_URL = process.env.HOST_URL || "http://localhost:5000";

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
		return this.state.username === CORRECT_REGULAR_USER_USERNAME;
	}

	// TODO: In phase 2, we plan on verifying admin credentials against a database.
	adminUsernameExists() {
		return this.state.username === CORRECT_ADMIN_USERNAME;
	}

	// TODO: In phase 2, we plan on verifying user credentials against a database.
	userPasswordIsCorrect(username) {
		return this.state.password === CORRECT_REGULAR_USER_PASSWORD;
	}

	// TODO: In phase 2, we plan on verifying admin credentials against a database.
	adminPasswordIsCorrect(username) {
		return this.state.password === CORRECT_ADMIN_PASSWORD;
	}

	handleLogInAttempt = () => {
		fetch(`${HOST_URL}/api/login`, {
			method: 'post',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			}),
		}).then(response => {
			
			if(response.status === 200){
				this.props.history.push('/home'); //route to home
			}else if (response.status === 404) {
				//login attempt has failed, handle notifying user somehow
				console.log("login attempt failed"); //do whatever here
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
			return INCORRECT_CREDENTIAL_MSG;
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
							onClick={this.handleLogInAttempt.bind(this)}
							variant="contained"
							disabled={this.state.username === '' || this.state.password === ''}
							disableElevation
						>
							Log In
						</Button>
						<br></br>
						<Button
							className="loginButton"
							href="/register"
							variant="contained"
							disableElevation
						>
							Sign Up
						</Button>
						<br></br>
						forgot password?
						<a href="/password reset">Reset Password</a>
						<br></br>
					</FormControl>
				</div>
			</div>
		);
	}
}
