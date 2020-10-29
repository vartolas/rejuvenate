import React from 'react';
import './styles.css';
import AdminPasswordResetForm from '../../react-components/Admin Password Reset Form';

export default class AdminPasswordReset extends React.Component {
    render() {
        return (
            <div id="adminPasswordResetContainer">
                <h1>This is the admin password reset page</h1>
                <br></br>
                {/* TODO: Add an admin home page. */}
                <AdminPasswordResetForm label1="Existing Username" label2="New Password"
                    successfulLoginLink="/admin" failureLoginLink="/admin password reset"
                    submitButtonName="Reset Password"
                />
                <br></br>
                <form action="/admin">
                    <input type="submit" value="Go Back" />
                </form>
            </div>    
        );
    }
}