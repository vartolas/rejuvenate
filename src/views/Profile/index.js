import React from 'react';
import './styles.css';

import SpanLink from '../../react-components/SpanLink';
export default class Profile extends React.Component {
    render(){
        return (
            <div id="profileContainer">
                <h1>This is the profile page</h1>
                <SpanLink to="/home" name="home"/>
            </div>    
        );
    }
}