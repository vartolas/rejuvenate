import React from "react";
import './styles.css';
import AdminForm from '../Admin Form';

import { CORRECT_ADMIN_USERNAME, CORRECT_ADMIN_PASSWORD } from '../Admin Form';
import {
    MISSING_USERNAME_ERROR_MSG, MISSING_PASSWORD_ERROR_MSG,
    INCORRECT_USERNAME_ERROR_MSG, INCORRECT_PASSWORD_ERROR_MSG,
    CORRECT_CREDENTIALS_MSG
} from '../Form';

export default class AdminLoginForm extends AdminForm {
    displayError() {
        if (this.state.username === '') {
            return <p>{MISSING_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password === '') {
            return <p>{MISSING_PASSWORD_ERROR_MSG}</p>;
        } else if (this.state.username !== CORRECT_ADMIN_USERNAME) {
            return <p>{INCORRECT_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password !== CORRECT_ADMIN_PASSWORD) {
            return <p>{INCORRECT_PASSWORD_ERROR_MSG}</p>;
        } else {
            return <p>{CORRECT_CREDENTIALS_MSG}</p>;
        }
    }
}