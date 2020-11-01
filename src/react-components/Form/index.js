import React from 'react';
import './styles.css';

import FormField from '../Form Field';

export default class Form extends React.Component {
    // I found this helpful: https://reactjs.org/docs/forms.html
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <form onSubmit={this.processCredentials} action={this.processCredentials() ?
                this.props.successfulLoginLink : this.props.failureLoginLink} >
                <FormField label="Username" value={this.props.username} onChange={this.updateUsername} />
                <FormField label="Password" value={this.props.password} onChange={this.updatePassword} />
                { this.displayError() }
                <input type="submit" value={this.props.submitButtonName} />
            </form>
        );
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
}

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