import React from 'react';
import './styles.css';

// import SpanLink from '../../react-components/SpanLink';
// import TopNavbar from '../../react-components/TopNavbar';
// import UserEntry from '../../react-components/FreindEntry';
import FriendList from '../../react-components/FriendList';

export default class Home extends React.Component {
      
    render(){

        const friends = [
            {name: 'Ben', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Jack', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Abby', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'George', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Olivia', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Emily', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Emily', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Emily', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Emily', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Emily', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Emily', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Emily', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
          ];

        return (
            <div id="homeContainer">
                <div id="friendListContainer">
                    <FriendList entries={friends}/>
                </div>
            </div>
        );
    }
}