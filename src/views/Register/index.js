import React from 'react';
import './styles.css';

export default class Register extends React.Component {
    render() {
        return (
            <div id="registerContainer">
                <h1>This is the register page</h1>
                <br></br>

                {/* A sign up form */}
                <div>
                    <label>
                        New Username: <input type="text" name="username" />
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
                    <input type="submit" value="Register" />
                </form>
            </div>    
        );
    }
}