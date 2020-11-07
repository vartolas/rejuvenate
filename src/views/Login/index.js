import React from 'react';
import './styles.css';

export const CORRECT_REGULAR_USER_USERNAME = "user";
export const CORRECT_REGULAR_USER_PASSWORD = "user";
export const CORRECT_ADMIN_USERNAME = "admin";
export const CORRECT_ADMIN_PASSWORD = "admin";

export const MISSING_USERNAME_ERROR_MSG = "Username is missing.";
export const MISSING_PASSWORD_ERROR_MSG = "Password is missing.";
export const INCORRECT_USERNAME_ERROR_MSG = "Username is incorrect.";
export const INCORRECT_PASSWORD_ERROR_MSG = "Password is incorrect.";
export const NONEXISTING_USERNAME_ERROR_MSG = "New username does not exist.";
export const EXISTING_USERNAME_ERROR_MSG = "New username already exists.";
export const WEAK_PASSWORD_ERROR_MSG = "New password is not strong enough.";
export const STRONG_PASSWORD_FOR_PASSWORD_RESET_MSG = "This existing username has a strong enough password.";
export const STRONG_PASSWORD_FOR_REGISTRATION_MSG = "This new username has a strong enough password.";
export const CORRECT_CREDENTIALS_MSG = "Username and password are correct.";


export default class Login extends React.Component {
    // I found this helpful: https://reactjs.org/docs/forms.html
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    updateUsername = (e) => {
        e.preventDefault();
        this.setState({ username: e.target.value });
    }

    updatePassword = (e) => {
        e.preventDefault();
        this.setState({ password: e.target.value });
    }

    // This is an abstract class.
    processCredentials() { }

    // This is an abstract class.
    displayError() { }

    render() {
        return (
            <div id="loginContainer">
                <h1>Rejuvenate</h1>
                <div id="loginComponent">
                    <form onSubmit={this.processCredentials} action={
                        this.processCredentials() ? "/home" : "/"} >
                        <div>
                            <label>
                                <input type="text" value={this.state.username} onChange={this.updateUsername} placeholder="Username"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="text" value={this.state.password} onChange={this.updatePassword} placeholder="Password"/>
                            </label>
                        </div>
                        <br></br>
                        { this.displayError() }
                        <input type="submit" value="Log In" />
                    </form>
                    <br></br>
                    <form action="/register">
                        <input type="submit" value="Sign Up" />
                    </form>
                    <br></br>
                    <form action="/password reset">
                        <input type="submit" value="Reset Password" />
                    </form>
                    <br></br>
                </div>
            </div>
        );
    }
}
