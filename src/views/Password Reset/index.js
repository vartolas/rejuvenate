import React from 'react';
import './styles.css';
import SpanLink from '../../react-components/SpanLink';

export default class PasswordReset extends React.Component {
    render(){
        return (
            <div id="passwordResetContainer">
                <h1>This is the password reset page</h1>
                <SpanLink to="/home" name="reset password"/>
            </div>    
        );
    }
}