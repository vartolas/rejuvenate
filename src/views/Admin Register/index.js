import React from 'react';
import './styles.css';
import AdminRegisterForm from '../../react-components/Admin Register Form';

export default class AdminRegister extends React.Component {
    render() {
        return (
            <div id="adminRegisterContainer">
                <h1>This is the admin register page</h1>
                <br></br>
                <AdminRegisterForm label1="New Username" label2="New Password"
                    successfulLoginLink="/admin" failureLoginLink="/admin register"
                    submitButtonName="Register"
                />
                <br></br>
                <form action="/admin">
                    <input type="submit" value="Go Back" />
                </form>
            </div>    
        );
    }
}