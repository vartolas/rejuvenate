import './styles.css';
import LoginForm from '../Login Form';

const CORRECT_REGULAR_ADMIN_USERNAME = "admin";
const CORRECT_REGULAR_ADMIN_PASSWORD = "admin";

export default class AdminLoginForm extends LoginForm {
    processCredentials() {
        return this.state.username !== '' &&
            this.state.password !== '' &&
            this.state.username === CORRECT_REGULAR_ADMIN_USERNAME &&
            this.state.password === CORRECT_REGULAR_ADMIN_PASSWORD;
    }

    displayError() {
        if (this.state.username === '') {
            return <p>{this.state.errorMessages.missingUsername}</p>;
        } else if (this.state.password === '') {
            return <p>{this.state.errorMessages.missingPassword}</p>;
        } else if (this.state.username !== CORRECT_REGULAR_ADMIN_USERNAME) {
            return <p>{this.state.errorMessages.incorrectUsername}</p>;
        } else if (this.state.password !== CORRECT_REGULAR_ADMIN_PASSWORD) {
            return <p>{this.state.errorMessages.incorrectPassword}</p>;
        } else {
            return <p>{this.state.errorMessages.correctCredentials}</p>;
        }
    }
}