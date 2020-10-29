import React from 'react';
import './styles.css';
import SpanLink from '../../react-components/SpanLink';
import AdminLoginForm from '../../react-components/Admin Login Form';

export default class AdminLogin extends React.Component {
    render() {
        return (
            <div id="adminLoginContainer">
                <h1>This is the admin login page</h1>
                <br></br>
                {/* TODO: Add an admin home page. */}
                <AdminLoginForm label1="Username" label2="Password"
                    successfulLoginLink="/admin" failureLoginLink="/admin"
                    submitButtonName="Log in"
                />
                <br></br>
                <SpanLink to="/admin" name="Sign Up" />
                <br></br>
                <SpanLink to="/admin" name="Reset Password" />
                <br></br>
                <form action="/">
                    <input type="submit" value="Go Back" />
                </form>
            </div>
        );
    }
}