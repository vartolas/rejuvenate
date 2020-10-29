import './styles.css';
import UserForm from '../User Form';
import React from 'react';

const CORRECT_REGULAR_USER_USERNAME = "user";
const CORRECT_REGULAR_USER_PASSWORD = "user";

export default class UserRegisterForm extends UserForm {
    displayError() {
        if (this.state.newUsername === '') {
            return <p>{this.state.errorMessages.missingUsername}</p>;
        } else if (this.state.newPassword === '') {
            return <p>{this.state.errorMessages.missingPassword}</p>;
        } else if (this.state.newUsername !== CORRECT_REGULAR_USER_USERNAME) {
            return <p>{this.state.errorMessages.existingUsername}</p>;
        } else if (this.state.newPassword !== CORRECT_REGULAR_USER_PASSWORD) {
            return <p>{this.state.errorMessages.weakPassword}</p>;
        } else {
            return <p>{this.state.errorMessages.strongPasswordForRegistration}</p>;
        }
    }
}