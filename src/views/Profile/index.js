import React from 'react';
import './styles.css';

import UserInfo from '../../react-components/UserInfo'
import SpanLink from '../../react-components/SpanLink';
import ProfileUserConnections from '../../react-components/ProfileUserConnections';

export default class Profile extends React.Component {
    render(){

      // Need to check whether this profile is the profile of the logged-in user.
      const profileIsEditable = false;

      return (
          <div id="profileContainer">

            <UserInfo isEditable={ profileIsEditable }/>

            <div id='secondProfilePageBar'>
              <ProfileUserConnections />
              <div className='profilePageComp' id='userStatsLinks'>
                <SpanLink to='/statistics' name="This entire div will be a nicer-looking link to this user's stats. For now, its only this link that takes you there." />
              </div>
            </div>

            <div className='profilePageComp' id='userPosts'>
              This div will contain this user's posts. (It will also fit to the rest of the page.)
            </div>

          </div>

      );
    }
}
