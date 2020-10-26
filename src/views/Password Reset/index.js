import React from 'react';
import './styles.css';
import SpanLink from '../../react-components/SpanLink';

const CORRECT_REGULAR_USER_USERNAME = "user";
const CORRECT_REGULAR_USER_PASSWORD = "user";

export default class PasswordReset extends React.Component {
    // I found this helpful: https://reactjs.org/docs/forms.html
    constructor(props) {
        super(props);
        this.state = {
            newUsername: '',
            newPassword: ''
        };
        // controlled components
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.tryToResetPassword = this.tryToResetPassword.bind(this);
        this.displayError = this.displayError.bind(this);
    }

    updateUsername(e) {
        e.preventDefault();
        this.setState({ newUsername: e.target.value });
    }

    updatePassword(e) {
        e.preventDefault();
        this.setState({ newPassword: e.target.value });
    }

    tryToResetPassword() {
        return this.state.newUsername !== '' &&
            this.state.newPassword !== '' &&
            this.state.newUsername === CORRECT_REGULAR_USER_USERNAME &&
            this.state.newPassword === CORRECT_REGULAR_USER_PASSWORD;
    }

    displayError() {
        if (this.state.newUsername === '') {
            return <p>New username is missing.</p>;
        } else if (this.state.newPassword === '') {
            return <p>New password is missing.</p>;
        } else if (this.state.newUsername !== CORRECT_REGULAR_USER_USERNAME) {
            return <p>New username does not exist.</p>;
        } else if (this.state.newPassword !== CORRECT_REGULAR_USER_PASSWORD) {
            return <p>New password is not strong enough.</p>;
        } else {
            return <p>This existing username has a strong enough password.</p>;
        }
    }
    
    render() {
        return (
            <div id="passwordResetContainer">
                <h1>This is the password reset page</h1>
                <br></br>

                {/* A password reset form */}
                <div>
                    <label>
                        Existing Username: <input type="text" name="username"
                            value={this.props.newUsername} onChange={this.updateUsername} />
                    </label>
                </div>
                <div>
                    <label>
                        New Password: <input type="text" name="password"
                            value={this.props.newPassword} onChange={this.updatePassword}/>
                    </label>
                </div>

                { this.displayError() }

                <form action="/">
                    <input type="submit" value="Go Back" />
                </form>
                <form onSubmit={this.tryToResetPassword} action={this.tryToResetPassword() ? "/home" : "/password reset"}>
                    <br></br>
                    <input type="submit" value="Reset Password" />
                </form>
            </div>    
        );
    }
}