import './styles.css';
import Form from '../Form';

export default class AdminForm extends Form {
    processCredentials() {
        return this.state.username !== '' &&
            this.state.password !== '' &&
            this.state.username === CORRECT_ADMIN_USERNAME &&
            this.state.password === CORRECT_ADMIN_PASSWORD;
    }
}

export const CORRECT_ADMIN_USERNAME = "admin";
export const CORRECT_ADMIN_PASSWORD = "admin";