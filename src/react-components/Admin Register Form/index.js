import React from "react";
import './styles.css';
import AdminForm from '../Admin Form';

const CORRECT_ADMIN_USERNAME = "admin";
const CORRECT_ADMIN_PASSWORD = "admin";

export default class AdminRegisterForm extends AdminForm {
    displayError() {
        if (this.state.username === '') {
            return <p>{this.state.errorMessages.missingUsername}</p>;
        } else if (this.state.password === '') {
            return <p>{this.state.errorMessages.missingPassword}</p>;
        } else if (this.state.username !== CORRECT_ADMIN_USERNAME) {
            return <p>{this.state.errorMessages.existingUsername}</p>;
        } else if (this.state.password !== CORRECT_ADMIN_PASSWORD) {
            return <p>{this.state.errorMessages.weakPassword}</p>;
        } else {
            return <p>{this.state.errorMessages.strongPasswordForRegistration}</p>;
        }
    }
}