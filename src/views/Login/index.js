import React from 'react';
import './styles.css';
import SpanLink from '../../react-components/SpanLink';
import UserLoginForm from '../../react-components/User Login Form';

export default class Login extends React.Component {
    render() {
        return (
            <div id="loginContainer">
                <h1>This is the login page</h1>
                <br></br>
                <UserLoginForm label1="Username" label2="Password"
                    successfulLoginLink="/home" failureLoginLink="/"
                    submitButtonName="Log in"
                />
                <br></br>
                <SpanLink to="/register" name="Sign Up" />
                <br></br>
                <SpanLink to="/password reset" name="Reset Password" />
            </div>
        );
    }
}