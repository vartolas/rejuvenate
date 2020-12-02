import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const CORRECT_REGULAR_USER_USERNAME = "user";
export const CORRECT_REGULAR_USER_PASSWORD = "user";
export const CORRECT_ADMIN_USERNAME = "admin";
export const CORRECT_ADMIN_PASSWORD = "admin";

export const EXISTING_USERNAME_ERROR_MSG = "New username already exists.";
export const WEAK_PASSWORD_ERROR_MSG = "New password is not strong enough.";
export const STRONG_PASSWORD_FOR_REGISTRATION_MSG =
	"This new username has a strong enough password.";

// TODO: Convert this to a functional component.
export default class Register extends React.Component {
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
		};
	}

	updateUsername = (e) => {
		e.preventDefault();
		this.setState({ username: e.target.value });
	};

	updatePassword = (e) => {
		e.preventDefault();
		this.setState({ password: e.target.value });
	};

	// TODO: In phase 2, we plan on verifying user credentials against a database.
	usernameExists() {
		return this.state.username === CORRECT_REGULAR_USER_USERNAME;
	}

	// TODO: In phase 2, we plan on verifying admin credentials against a database.
	adminUsernameExists() {
		return this.state.username === CORRECT_ADMIN_USERNAME;
	}

	// TODO: In phase 2, we plan on verifying user credentials against a database.
	userPasswordIsStrong() {
		return this.state.password !== CORRECT_REGULAR_USER_PASSWORD;
	}

	// TODO: In phase 2, we plan on verifying admin credentials against a database.
	adminPasswordIsStrong() {
		return this.state.password !== CORRECT_ADMIN_PASSWORD;
	}

	logIn() {
		if (this.usernameExists() && this.userPasswordIsStrong()) {
			return "/home";
		} else if (this.adminUsernameExists() && this.adminPasswordIsStrong()) {
			return "/admin home";
		} else {
			return "/register";
		}
	}

	render() {
		return (
			<div id="registerContainer">
				<h1>Rejuvenate</h1>
				<div id="registerComponent">
					<FormControl>
						<TextField
							id="usernameTextbox"
							value={this.state.username}
							onChange={this.updateUsername}
							label="New Username"
							// error={!this.state.username}
							// helperText={EXISTING_USERNAME_ERROR_MSG}
						/>
						<TextField
							id="passwordTextbox"
							value={this.state.password}
							onChange={this.updatePassword}
							label="New Password"
							type="password"
							// error={!this.state.password}
							// helperText={WEAK_PASSWORD_ERROR_MSG}
						/>
						<br></br>
						<Button
							className="registerButton"
							href={this.logIn()}
							variant="contained"
							disabled={this.state.username === '' || this.state.password === ''}
							disableElevation
						>
							Register
						</Button>
						<br></br>
						<Button
							className="registerButton"
							href="/"
							variant="contained"
							disableElevation
						>
							Go Back
						</Button>
						<br></br>
					</FormControl>
				</div>
			</div>
		);
	}
}
