import React from 'react';
import './styles.css';

import SpanLink from '../../react-components/SpanLink';
import TopNavbar from '../../react-components/TopNavbar';

export default class Home extends React.Component {
    render(){
        return (
            <div id="homeContainer">
                <TopNavbar />
                <div id="pageBody">
                    <h1>This is the home page</h1>
                    <SpanLink to="/profile" name="profile" />
                    <SpanLink to="/" name="sign out" />
                </div>
            </div>
        );
    }
}