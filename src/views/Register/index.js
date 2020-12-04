import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const CORRECT_REGULAR_USER_USERNAME = "user";
export const CORRECT_REGULAR_USER_PASSWORD = "user";
export const CORRECT_ADMIN_USERNAME = "admin";
export const CORRECT_ADMIN_PASSWORD = "admin";

export const EXISTING_USERNAME_ERROR_MSG = "Username already exists.";
export const WEAK_PASSWORD_ERROR_MSG = "New password is not strong enough.";
export const STRONG_PASSWORD_FOR_REGISTRATION_MSG =
	"This new username has a strong enough password.";

const HOST_URL = process.env.HOST_URL || "http://localhost:5000";

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
			firstname: "",
			lastname: "",
			username: "",
			password: "",
			usernameTaken: null,
			successfulRegister: null
		};
	}

	register() {
		fetch(`${HOST_URL}/api/users/check/${this.state.username}`)
			.then(res => res.json())
			.then(json => {
				this.setState({usernameTaken: json.usernameTaken})
				if(!this.state.usernameTaken){
					fetch(`${HOST_URL}/api/users`, {
						method: 'post',
						headers: {"Content-Type": "application/json"},
						body: JSON.stringify({
							firstname: this.state.firstname,
							lastname: this.state.lastname,
							username: this.state.username,
							password: this.state.password,
						})
					})
					.then(res => {
						if (res.status === 200) {
							this.setState({successfulRegister: true})
						} else {
							console.log("register attempt failed")
							this.setState({successfulRegister: false})
						}
					});
				} else {
					this.setState({successfulRegister: false})
				}
			});
		
		
	}

	displayMessage(){
		if (this.state.successfulRegister === true){
			return (
				<span id="successMessage">You have succesfully registered! Welcome!</span>
			)
		}
	}

	usernameTakenHelperText(){
		if (this.state.usernameTaken){
			return EXISTING_USERNAME_ERROR_MSG
		}
		return ""
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
		console.log(this.state)
		return (
			<div id="registerContainer">
				<h1>Rejuvenate</h1>
				<div id="registerComponent">
					<FormControl>
						<TextField
							id="firstnameTextbox"
							value={this.state.firstname}
							onChange={(e) => {e.preventDefault(); this.setState({firstname: e.target.value})}}
							label="First Name"
							// error={!this.state.password}
							// helperText={WEAK_PASSWORD_ERROR_MSG}
						/>
						<TextField
							id="lastnameTextbox"
							value={this.state.lastname}
							onChange={(e) => {e.preventDefault(); this.setState({lastname: e.target.value})}}
							label="Last Name"
							// error={!this.state.password}
							// helperText={WEAK_PASSWORD_ERROR_MSG}
						/>
						<TextField
							id="usernameTextbox"
							value={this.state.username}
							onChange={(e) => {e.preventDefault(); this.setState({username: e.target.value})}}
							label="Username"
							error={this.state.usernameTaken === true}
							helperText={this.usernameTakenHelperText()}
							// error={!this.state.username}
						/>
						<TextField
							id="passwordTextbox"
							value={this.state.password}
							onChange={(e) => {e.preventDefault(); this.setState({password: e.target.value})}}
							label="Password"
							type="password"
							// error={!this.state.password}
							// helperText={WEAK_PASSWORD_ERROR_MSG}
						/>
						<br></br>
						<Button
							className="registerButton"
							onClick = {this.register.bind(this)}
							variant="contained"
							disabled={this.state.firstname === "" || this.state.lastname === ""	||
									this.state.username === "" || this.state.password === ""}
							disableElevation
						>
							Register
						</Button>
						<br></br>
						<Button
							className="registerButton"
							href='/login'
							variant="contained"
							disableElevation
						>
							Go Back
						</Button>
						<br></br>
					</FormControl>
				</div>
				{this.displayMessage()}
			</div>
		);
	}
}
