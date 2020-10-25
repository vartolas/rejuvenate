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
    }

    updateUsername(e) {
        e.preventDefault();
        this.setState({ username: e.target.value });
    }

    updatePassword(e) {
        e.preventDefault();
        this.setState({ password: e.target.value });
    }

    tryToLogin(e) {
        console.log("Username is: " + this.state.username + "\n" +
                    "Password is: " + this.state.password);

        // Check if any credentials are missing.
        if (this.state.username === '') {
            alert("Username is missing.");
            return false;
        }

        if (this.state.password === '') {
            alert("Password is missing.");
            return false; 
        }

        // Check if all credentials are correct.
        if (this.state.username !== CORRECT_REGULAR_USER_USERNAME) {
            alert("Username is incorrect.");
            return false;
        }

        if (this.state.password !== CORRECT_REGULAR_USER_PASSWORD) {
            alert("Password is incorrect.");
            return false;
        }

        alert("Username and password are correct.");
        return true;
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
                        value={this.props.password} onChange={this.updatePassword}/>
                    </label>
                </div>
                <br></br>

                {/* TODO: Only visit the home page if credentials are correct. */}
                <form onSubmit={this.tryToLogin} action="/home">
                    <input type="submit" value="Log in" />
                </form>
                <br></br>

                <SpanLink to="/register" name="Don't have an account? Sign up!"/>
                <SpanLink to="/password reset" name="Forgot password?" />
            </div>
        );
    }
}