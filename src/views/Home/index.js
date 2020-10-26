import React from 'react';
import './styles.css';

import SpanLink from '../../react-components/SpanLink';

export default class Home extends React.Component {
    render(){
        return (
            <div id="homeContainer">
                <h1>This is the home page</h1>
                <SpanLink to="/profile" name="profile" />
                <SpanLink to="/" name="sign out" />
            </div>    
        );
    }
}