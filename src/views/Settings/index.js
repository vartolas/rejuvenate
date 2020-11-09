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
export const EXISTING_USERNAME_ERROR_MSG = "New username already exists.";
export const NONEXISTING_USERNAME_ERROR_MSG = "New username does not exist.";

export const WEAK_PASSWORD_ERROR_MSG = "New password is not strong enough.";
export const STRONG_PASSWORD_FOR_PASSWORD_RESET_MSG = "This existing username has a strong enough password.";

export default class Setting extends React.Component {
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

    // TODO: I may not need this function.
    processCredentials() {
        return this.state.username !== '' &&
            this.state.password !== '' &&
            ((this.state.username === CORRECT_REGULAR_USER_USERNAME &&
                this.state.password === CORRECT_REGULAR_USER_PASSWORD) ||
            (this.state.username === CORRECT_ADMIN_USERNAME &&
                this.state.password === CORRECT_ADMIN_PASSWORD));
    }

    // TODO: In phase 2, we plan on verifying user/admin credentials against a database.
    displayUsernameError() {
        if (this.state.username === '') {
            return MISSING_USERNAME_ERROR_MSG;
        } else if (this.state.username === CORRECT_REGULAR_USER_USERNAME || this.state.username === CORRECT_ADMIN_USERNAME) {
            return EXISTING_USERNAME_ERROR_MSG;
        } else {
            return '';
        }
    }
    
    // TODO: In phase 2, we plan on verifying user/admin credentials against a database.
    displayPasswordError() {
        if (this.state.password === '') {
            return MISSING_PASSWORD_ERROR_MSG;
        } else if (this.state.password === CORRECT_REGULAR_USER_PASSWORD || this.state.password === CORRECT_ADMIN_PASSWORD) {
            return WEAK_PASSWORD_ERROR_MSG;
        } else {
            return '';
        }
    }

    changeUsername() {
        if (this.state.username !== CORRECT_REGULAR_USER_USERNAME && this.state.username !== CORRECT_ADMIN_USERNAME) {
            return '/settings';
        } else {
            return '/settings';
        }
    }

    changePassword() {
        if (this.state.password !== CORRECT_REGULAR_USER_PASSWORD && this.state.password !== CORRECT_ADMIN_PASSWORD) {
            return '/settings';
        } else {
            return '/settings';
        }
    }
    
    render() {
        return (
            <div id="settingsContainer">
                <h1>Settings</h1>
                <div id="settingsComponent">
                    <FormControl>
                        <TextField
                            id="usernameTextbox"
                            value={this.state.username}
                            onChange={this.updateUsername}
                            label="New Username"
                            error={!this.state.username}
                            helperText={this.displayUsernameError()}
                        />
                        <TextField
                            id="passwordTextbox"
                            value={this.state.password}
                            onChange={this.updatePassword}
                            label="New Password"
                            type="password"
                            error={!this.state.password}
                            helperText={this.displayPasswordError()}
                        />
                        <br></br>
                        <Button href={this.changeUsername().toString()} variant="contained" color="primary" disableElevation>
                            Change Username
                        </Button>
                        <br></br>
                        <Button href={this.changePassword().toString()} variant="contained" color="primary" disableElevation>
                            Change Password
                        </Button>
                        <br></br>
                    </FormControl>
                </div>
            </div>    
        );
    }
}