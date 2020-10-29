import React from 'react';
import './styles.css';

const CORRECT_REGULAR_USER_USERNAME = "user";
const CORRECT_REGULAR_USER_PASSWORD = "user";

export default class LoginForm extends React.Component {
    // I found this helpful: https://reactjs.org/docs/forms.html
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessages: {
                missingUsername: "Username is missing.",
                missingPassword: "Password is missing.",
                incorrectUsername: "Username is incorrect.",
                incorrectPassword: "Password is incorrect.",
                correctCredentials: "Username and password are correct."
            }
        };
    }

    render() {
        return (
            <form onSubmit={this.processCredentials} action={this.processCredentials() ?
                this.props.successfulLoginLink : this.props.failureLoginLink} >
                <div>
                    <label>
                        {this.props.label1}: <input type="text" name="username"
                            value={this.props.username} onChange={this.updateUsername} />
                    </label>
                </div>
                <div>
                    <label>
                        {this.props.label2}: <input type="text" name="password"
                            value={this.props.password} onChange={this.updatePassword} />
                    </label>
                </div>
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

    displayError() {
        if (this.state.username === '') {
            return <p>{this.state.errorMessages.missingUsername}</p>;
        } else if (this.state.password === '') {
            return <p>{this.state.errorMessages.missingPassword}</p>;
        } else if (this.state.username !== CORRECT_REGULAR_USER_USERNAME) {
            return <p>{this.state.errorMessages.incorrectUsername}</p>;
        } else if (this.state.password !== CORRECT_REGULAR_USER_PASSWORD) {
            return <p>{this.state.errorMessages.incorrectPassword}</p>;
        } else {
            return <p>{this.state.errorMessages.correctCredentials}</p>;
        }
    }

    // TODO: for password reset page
    // displayError() {
    //     if (this.state.newUsername === '') {
    //         return <p>New username is missing.</p>;
    //     } else if (this.state.newPassword === '') {
    //         return <p>New password is missing.</p>;
    //     } else if (this.state.newUsername !== CORRECT_REGULAR_USER_USERNAME) {
    //         return <p>New username does not exist.</p>;
    //     } else if (this.state.newPassword !== CORRECT_REGULAR_USER_PASSWORD) {
    //         return <p>New password is not strong enough.</p>;
    //     } else {
    //         return <p>This existing username has a strong enough password.</p>;
    //     }
    // }

    // TODO: for register page
    // displayError() {
    //     if (this.state.newUsername === '') {
    //         return <p>New username is missing.</p>;
    //     } else if (this.state.newPassword === '') {
    //         return <p>New password is missing.</p>;
    //     } else if (this.state.newUsername !== CORRECT_REGULAR_USER_USERNAME) {
    //         return <p>New username already exists.</p>;
    //     } else if (this.state.newPassword !== CORRECT_REGULAR_USER_PASSWORD) {
    //         return <p>New password is not strong enough.</p>;
    //     } else {
    //         return <p>This new username has a strong enough password.</p>;
    //     }
    // }
}