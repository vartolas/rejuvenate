import React from 'react';
import './styles.css';
import SpanLink from '../../react-components/SpanLink';
import LoginForm from '../../react-components/Login Form';

export default class Login extends React.Component {
    render() {
        return (
            <div id="loginContainer">
                <h1>This is the login page</h1>
                <br></br>
                <LoginForm label1="Username" label2="Password" />
                <br></br>
                <SpanLink to="/register" name="Sign Up"/>
                <SpanLink to="/password reset" name="Reset Password" />
            </div>
        );
    }
}