import './styles.css';
import Form from '../Form';

const CORRECT_REGULAR_ADMIN_USERNAME = "admin";
const CORRECT_REGULAR_ADMIN_PASSWORD = "admin";

export default class AdminForm extends Form {
    processCredentials() {
        return this.state.username !== '' &&
            this.state.password !== '' &&
            this.state.username === CORRECT_REGULAR_ADMIN_USERNAME &&
            this.state.password === CORRECT_REGULAR_ADMIN_PASSWORD;
    }
}