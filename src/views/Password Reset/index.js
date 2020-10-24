import React from 'react';
import './styles.css';

export default class PasswordReset extends React.Component {
    render() {
        return (
            <div id="passwordResetContainer">
                <h1>This is the password reset page</h1>
                <br></br>

                {/* A password reset form */}
                <div>
                    <label>
                        Existing Username: <input type="text" name="username" />
                    </label>
                </div>
                <div>
                    <label>
                        New Password: <input type="text" name="password" />
                    </label>
                </div>

                <form action="/">
                    <br></br>
                    <input type="submit" value="Go Back" />
                </form>
                <form action="/home">
                    <br></br>
                    <input type="submit" value="Reset Password" />
                </form>
            </div>    
        );
    }
}