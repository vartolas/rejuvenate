import React from 'react';
import './styles.css';

import SpanLink from '../../react-components/SpanLink';

export default class Register extends React.Component {
    render(){
        return (
            <div id="registerContainer">
                <h1>This is the register page</h1>
                <SpanLink to="/home" name="register" />
            </div>    
        );
    }
}