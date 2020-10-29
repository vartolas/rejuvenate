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
            password: ''
        };
        // controlled components
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.processCredentials = this.processCredentials.bind(this);
        this.displayError = this.displayError.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.processCredentials} action={this.processCredentials() ? "/home" : "/"}>
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
                <br></br>
                <input type="submit" value="Log in" />
                { this.displayError() }
            </form>
        );
    }

    // Use arrow functions so that you don't have to write something.bind(this).
    // for every function you create.
    updateUsername(e) {
        e.preventDefault();
        this.setState({ username: e.target.value });
    }

    updatePassword(e) {
        e.preventDefault();
        this.setState({ password: e.target.value });
    }

    processCredentials() {
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
}