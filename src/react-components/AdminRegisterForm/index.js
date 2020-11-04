import React from "react";
import './styles.css';
import AdminForm from '../AdminForm';

import { CORRECT_ADMIN_USERNAME, CORRECT_ADMIN_PASSWORD } from "../AdminForm";
import {
    MISSING_USERNAME_ERROR_MSG, MISSING_PASSWORD_ERROR_MSG,
    EXISTING_USERNAME_ERROR_MSG, WEAK_PASSWORD_ERROR_MSG,
    STRONG_PASSWORD_FOR_REGISTRATION_MSG
} from '../Form';

export default class AdminRegisterForm extends AdminForm {
    displayError() {
        if (this.state.username === '') {
            return <p>{MISSING_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password === '') {
            return <p>{MISSING_PASSWORD_ERROR_MSG}</p>;
        } else if (this.state.username !== CORRECT_ADMIN_USERNAME) {
            return <p>{EXISTING_USERNAME_ERROR_MSG}</p>;
        } else if (this.state.password !== CORRECT_ADMIN_PASSWORD) {
            return <p>{WEAK_PASSWORD_ERROR_MSG}</p>;
        } else {
            return <p>{STRONG_PASSWORD_FOR_REGISTRATION_MSG}</p>;
        }
    }
}
