import React from 'react';
import './styles.css';
import AdminLoginForm from '../../react-components/AdminLoginForm';

export default class AdminLogin extends React.Component {
    render() {
        return (
            <div id="adminLoginContainer">
                <h1>This is the admin login page</h1>
                <br></br>
                <AdminLoginForm label1="Username" label2="Password"
                    successfulLoginLink="/admin home" failureLoginLink="/admin"
                    submitButtonName="Log in"
                />
                <br></br>
                <form action="/admin register">
                    <input type="submit" value="Sign Up" />
                </form>
                <br></br>
                <form action="/admin password reset">
                    <input type="submit" value="Reset Password" />
                </form>
                <br></br>
                <form action="/">
                    <input type="submit" value="Go Back" />
                </form>
            </div>
        );
    }
}
