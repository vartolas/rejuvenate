import React from 'react';
import './styles.css';
import UserLoginForm from '../../react-components/UserLoginForm';

export default class Login extends React.Component {
    render() {
        return (
            <div id="loginContainer">
                <h1>This is the login page</h1>
                <br></br>

                <div id="loginComponent">
                    <UserLoginForm label1="Username" label2="Password"
                        successfulLoginLink="/home" failureLoginLink="/"
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
