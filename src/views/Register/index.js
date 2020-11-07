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


export default class Register extends React.Component {
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

    processCredentials() {
        return this.state.username !== '' &&
            this.state.password !== '' &&
            ((this.state.username === CORRECT_REGULAR_USER_USERNAME &&
                this.state.password === CORRECT_REGULAR_USER_PASSWORD) ||
            (this.state.username === CORRECT_ADMIN_USERNAME &&
                this.state.password === CORRECT_ADMIN_PASSWORD));
    }

    displayError() {
        if (this.state.username === '') {
            return <p>{MISSING_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password === '') {
            return <p>{MISSING_PASSWORD_ERROR_MSG}</p>;
        } else if (this.state.username !== CORRECT_REGULAR_USER_USERNAME && this.state.username !== CORRECT_ADMIN_USERNAME) {
            return <p>{EXISTING_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password !== CORRECT_REGULAR_USER_PASSWORD && this.state.username !== CORRECT_ADMIN_PASSWORD) {
            return <p>{WEAK_PASSWORD_ERROR_MSG}</p>;
        } else {
            return <p>{STRONG_PASSWORD_FOR_REGISTRATION_MSG}</p>;
        }
    }

    logIn() {
        if (this.state.username === CORRECT_REGULAR_USER_USERNAME &&
            this.state.password === CORRECT_REGULAR_USER_PASSWORD) {
            return "/home";
        } else if (this.state.username === CORRECT_ADMIN_USERNAME &&
            this.state.password === CORRECT_ADMIN_PASSWORD) {
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
                    <form onSubmit={this.processCredentials} action={this.logIn()} >
                        <div>
                            <label>
                                <input type="text" value={this.state.username} onChange={this.updateUsername} placeholder="New Username"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="text" value={this.state.password} onChange={this.updatePassword} placeholder="New Password"/>
                            </label>
                        </div>
                        { this.displayError() }
                        <input type="submit" value="Register" />
                    </form>
                    <br></br>
                    <form action="/">
                        <input type="submit" value="Go Back" />
                    </form>
                </div>
            </div>
        );
    }
}
