import React from 'react';
import './styles.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export const CORRECT_REGULAR_USER_USERNAME = "user";
export const CORRECT_REGULAR_USER_PASSWORD = "user";
export const CORRECT_ADMIN_USERNAME = "admin";
export const CORRECT_ADMIN_PASSWORD = "admin";

export const MISSING_USERNAME_ERROR_MSG = "Username is missing.";
export const MISSING_PASSWORD_ERROR_MSG = "Password is missing.";
export const INCORRECT_USERNAME_ERROR_MSG = "Username is incorrect.";
export const INCORRECT_PASSWORD_ERROR_MSG = "Password is incorrect.";
export const CORRECT_CREDENTIALS_MSG = "Username and password are correct.";

export default class Login extends React.Component {
    // I found this helpful: 
    // - https://reactjs.org/docs/forms.html
    // - https://material-ui.com/components/text-fields/
    // - https://material-ui.com/components/buttons/#text-buttons
    // - https://material-ui.com/api/form-control/

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
            return <p>{INCORRECT_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password !== CORRECT_REGULAR_USER_PASSWORD && this.state.username !== CORRECT_ADMIN_PASSWORD) {
            return <p>{INCORRECT_PASSWORD_ERROR_MSG}</p>;
        } else {
            return <p>{CORRECT_CREDENTIALS_MSG}</p>;
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
            return "/";
        }
    }

    render() {
        return (
            <div id="loginContainer">
                <h1>Rejuvenate</h1>
                <div id="loginComponent">
                    <FormControl>
                        {/* <TextField
                            error
                            id="standard-error-helper-text"
                            label="Username"
                            helperText={MISSING_USERNAME_ERROR_MSG}
                        /> */}
                        <TextField
                            id="standard-username-input"
                            value={this.state.username}
                            onChange={this.updateUsername}
                            label="Username"
                        />
                        <TextField
                            id="standard-password-input"
                            value={this.state.password}
                            onChange={this.updatePassword}
                            label="Password"
                            type="password"
                        />
                        <br></br>
                        <Button href={this.logIn().toString()} variant="contained" color="primary" disableElevation >
                            Log In
                        </Button>
                        <br></br>
                        <Button href="/register" variant="contained" color="primary" disableElevation>
                            Sign Up
                        </Button>
                        <br></br>
                        <Button href="/password reset" variant="contained" color="primary" disableElevation>
                            Reset Password
                        </Button>
                        <br></br>
                    </FormControl>

                    { this.displayError() }
                </div>
            </div>
        );
    }
}
