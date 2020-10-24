import React from 'react';
import './styles.css';
import SpanLink from '../../react-components/SpanLink';

export default class Login extends React.Component {
    render() {
        return (
            <div id="loginContainer">
                <h1>This is the login page</h1>
                <br></br>

                {/* A log in form */}
                <div>
                    <label>
                        Username: <input type="text" name="username" />
                    </label>
                </div>
                <div>
                    <label>
                        Password: <input type="text" name="password" />
                    </label>
                </div>

                <form action="/home">
                    <br></br>
                    <input type="submit" value="Log in" />
                </form>
                <br></br>

                <SpanLink to="/register" name="Don't have an account? Sign up!"/>
                <SpanLink to="/password reset" name="Forgot password?" />
            </div>
        );
    }
}