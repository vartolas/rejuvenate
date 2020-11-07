import React from 'react';
import './styles.css';
import UserRegisterForm from '../../react-components/UserRegisterForm';

export default class Register extends React.Component {
    render() {
        return (
            <div id="registerContainer">
                <h1>This is the register page</h1>
                <br></br>
                <UserRegisterForm label1="New Username" label2="New Password"
                    successfulLoginLink="/home" failureLoginLink="/register"
                    submitButtonName="Register"
                />
                <br></br>
                <form action="/">
                    <input type="submit" value="Go Back" />
                </form>
            </div>
        );
    }
}
