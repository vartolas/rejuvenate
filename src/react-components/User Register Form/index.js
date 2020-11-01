import React from 'react';
import './styles.css';
import UserForm from '../User Form';

import { CORRECT_REGULAR_USER_USERNAME, CORRECT_REGULAR_USER_PASSWORD } from "../User Form";

export default class UserRegisterForm extends UserForm {
    displayError() {
        if (this.state.username === '') {
            return <p>{this.state.errorMessages.missingUsername}</p>;
        } else if (this.state.password === '') {
            return <p>{this.state.errorMessages.missingPassword}</p>;
        } else if (this.state.username !== CORRECT_REGULAR_USER_USERNAME) {
            return <p>{this.state.errorMessages.existingUsername}</p>;
        } else if (this.state.password !== CORRECT_REGULAR_USER_PASSWORD) {
            return <p>{this.state.errorMessages.weakPassword}</p>;
        } else {
            return <p>{this.state.errorMessages.strongPasswordForRegistration}</p>;
        }
    }
}