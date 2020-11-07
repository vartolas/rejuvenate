import React from 'react';
import './styles.css';
import UserLoginForm from '../../react-components/UserLoginForm';

export default class Login extends React.Component {
    render() {
        return (
            <div id="loginContainer">
                <h1>Rejuvenate</h1>
                <div id="loginComponent">
                    <UserLoginForm
                        successfulLoginLink="/home"
                        failureLoginLink="/"
                        submitButtonName="Log in"
                    />
                    <br></br>
                    <form action="/register">
                        <input type="submit" value="Sign Up" />
                    </form>
                    <br></br>
                    <form action="/password reset">
                        <input type="submit" value="Reset Password" />
                    </form>
                    <br></br>
                    <form action="/admin">
                        <input type="submit" value="Login in as Admin" />
                    </form>
                </div>
            </div>
        );
    }
}
