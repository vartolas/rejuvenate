import React from 'react';
import './styles.css';
import SpanLink from '../../react-components/SpanLink';

export default class Login extends React.Component {
    render(){
        return (
            <div id="loginContainer">
                <h1>This is the login page</h1>
                <SpanLink to="/authorized" name="login"/>
                <SpanLink to="/register" name="sign up"/>
                <SpanLink to="/password reset" name="reset password"/>
            </div>    
        );
    }
}