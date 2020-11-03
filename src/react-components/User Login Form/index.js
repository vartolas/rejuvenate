import React from 'react';
import './styles.css';
import UserForm from '../User Form';

import { CORRECT_REGULAR_USER_USERNAME, CORRECT_REGULAR_USER_PASSWORD } from "../User Form";
import {
    MISSING_USERNAME_ERROR_MSG, MISSING_PASSWORD_ERROR_MSG,
    INCORRECT_USERNAME_ERROR_MSG, INCORRECT_PASSWORD_ERROR_MSG,
    CORRECT_CREDENTIALS_MSG
} from '../Form';

export default class UserLoginForm extends UserForm {
    displayError() {
        if (this.state.username === '') {
            return <p>{MISSING_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password === '') {
            return <p>{MISSING_PASSWORD_ERROR_MSG}</p>;
        } else if (this.state.username !== CORRECT_REGULAR_USER_USERNAME) {
            return <p>{INCORRECT_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password !== CORRECT_REGULAR_USER_PASSWORD) {
            return <p>{INCORRECT_PASSWORD_ERROR_MSG}</p>;
        } else {
            return <p>{CORRECT_CREDENTIALS_MSG}</p>;
        }
    }
}