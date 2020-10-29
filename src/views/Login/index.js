import React from 'react';
import './styles.css';
import SpanLink from '../../react-components/SpanLink';

const CORRECT_REGULAR_USER_USERNAME = "user";
const CORRECT_REGULAR_USER_PASSWORD = "user";

export default class Login extends React.Component {
    // I found this helpful: https://reactjs.org/docs/forms.html
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        // controlled components
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.tryToLogin = this.tryToLogin.bind(this);
        this.displayError = this.displayError.bind(this);
    }

    updateUsername(e) {
        e.preventDefault();
        this.setState({ username: e.target.value });
    }

    updatePassword(e) {
        e.preventDefault();
        this.setState({ password: e.target.value });
    }

    tryToLogin() {
        return this.state.username !== '' &&
            this.state.password !== '' &&
            this.state.username === CORRECT_REGULAR_USER_USERNAME &&
            this.state.password === CORRECT_REGULAR_USER_PASSWORD;
    }

    displayError() {
        if (this.state.username === '') {
            return <p>Username is missing.</p>;
        } else if (this.state.password === '') {
            return <p>Password is missing.</p>;
        } else if (this.state.username !== CORRECT_REGULAR_USER_USERNAME) {
            return <p>Username is incorrect.</p>;
        } else if (this.state.password !== CORRECT_REGULAR_USER_PASSWORD) {
            return <p>Password is incorrect.</p>;
        } else {
            return <p>Username and password are correct.</p>;
        }
    }

    render() {
        return (
            <div id="loginContainer">
                <h1>This is the login page</h1>
                <br></br>

                {/* A log in form */}
                <div>
                    <label>
                        Username: <input type="text" name="username"
                        value={this.props.username} onChange={this.updateUsername} />
                    </label>
                </div>
                <div>
                    <label>
                        Password: <input type="text" name="password"
                        value={this.props.password} onChange={this.updatePassword} />
                    </label>
                </div>

                { this.displayError() }

                <form onSubmit={this.tryToLogin} action={this.tryToLogin() ? "/home" : "/"}>
                    <input type="submit" value="Log in" />
                </form>
                <br></br>

                <SpanLink to="/register" name="Sign Up"/>
                <SpanLink to="/password reset" name="Reset Password" />
            </div>
        );
    }
}
