import React from 'react';
import './styles.css';

import UserInfo from '../../react-components/User Info'
import SpanLink from '../../react-components/Span Link';
import ProfileUserConnections from '../../react-components/Profile User Connections';
import PostList from '../../react-components/Post List';

// Need to pull this user's posts from somewhere.
const posts = [
    {tag: 'Advice/Fitness', content: {text:'What do you guys think of my new kicks?!', picture:'https://www.womenshealthsa.co.za/wp-content/uploads/2019/03/PUMA-Hybrid-NX-TZ.jpg'},
        user:{ username:'John Doe', avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
        comments: [{user:'Cathy', comment: "Looks like you figured out how to post a pic!"}, {user:'Spiderman', comment: 'Fresh! Where from? I might have to get myself a pair!'}], likes: '12'},
    {tag: 'General', content: {text:'I can\'t quite figure out how to post a picture... I wanna show off my new shoes!', picture:''},
        user:{ username:'John Doe', avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
        comments: [{user:'Cathy', comment: "Click the 'Add Image' icon!"}, {user:'Auston', comment: "Cmonnnn Jon it's right there"}], likes: '1'},
  ];

export default class Profile extends React.Component {

    render() {
      // Need to check whether this profile is the profile of the logged-in user.
      const profileIsEditable = false;

      return (
          <div id="profileContainer">

            <UserInfo isEditable={ profileIsEditable }/>

            <div id='middleProfilePageBar'>
              <div className='profilePageComp' id='userStatsPreview'>
                <h4>John's Pinned Stats</h4>
                <a href=''>See more of John's stats</a>
              </div>

              <div className='profilePageComp' id='userPosts'>
                <PostList entries={posts} />
              </div>
            </div>

            <ProfileUserConnections />

          </div>

      );
    }
}
