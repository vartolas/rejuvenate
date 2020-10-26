import React from 'react';
import './styles.css';

import UserInfo from '../../react-components/UserInfo'
import SpanLink from '../../react-components/SpanLink';

export default class Profile extends React.Component {
    render(){
        return (
            <div id="profile">

              <div id='navPlaceholder'>    <br/>Nav bar </div>

              <UserInfo />

              <div id='userPostsPlaceholder'>   <br/>User's posts </div>
            </div>

        );
    }
}
