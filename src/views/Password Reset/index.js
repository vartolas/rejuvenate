import React from 'react';
import './styles.css';
import UserPasswordResetForm from '../../react-components/User Password Reset Form';

export default class PasswordReset extends React.Component {
    render() {
        return (
            <div id="passwordResetContainer">
                <h1>This is the password reset page</h1>
                <br></br>
                <UserPasswordResetForm label1="Existing Username" label2="New Password"
                    successfulLoginLink="/home" failureLoginLink="/password reset"
                    submitButtonName="Reset Password"
                />
                <br></br>
                <form action="/">
                    <input type="submit" value="Go Back" />
                </form>
            </div>    
        );
    }
}