// Mock user credentials and admin credentials.
const CORRECT_REGULAR_USER_USERNAME = "user";
const CORRECT_REGULAR_USER_PASSWORD = "user";
const CORRECT_ADMIN_USERNAME = "admin";
const CORRECT_ADMIN_PASSWORD = "admin";

// For the login page.
const INCORRECT_USERNAME_ERROR_MSG = "Username is incorrect.";
const INCORRECT_PASSWORD_ERROR_MSG = "Password is incorrect.";
const INCORRECT_CREDENTIAL_MSG = "Invalid credentials.";

// For the register page.
const EXISTING_USERNAME_ERROR_MSG = "Username already exists.";
const STRONG_PASSWORD_FOR_REGISTRATION_MSG =
	"This new username has a strong enough password.";
    
// For the password reset page.
const NONEXISTING_USERNAME_ERROR_MSG = "New username does not exist.";
const WEAK_PASSWORD_ERROR_MSG = "New password is not strong enough.";
const STRONG_PASSWORD_FOR_PASSWORD_RESET_MSG =
    "This existing username has a strong enough password.";

export default {
    CORRECT_REGULAR_USER_USERNAME, CORRECT_REGULAR_USER_PASSWORD,
    CORRECT_ADMIN_USERNAME, CORRECT_ADMIN_PASSWORD,

    INCORRECT_USERNAME_ERROR_MSG, INCORRECT_PASSWORD_ERROR_MSG,
    INCORRECT_CREDENTIAL_MSG,

    EXISTING_USERNAME_ERROR_MSG, WEAK_PASSWORD_ERROR_MSG,
    STRONG_PASSWORD_FOR_REGISTRATION_MSG,

    NONEXISTING_USERNAME_ERROR_MSG, STRONG_PASSWORD_FOR_PASSWORD_RESET_MSG
};
