import React from 'react';
import './styles.css';
import {IconButton} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import SpanLink from '../../react-components/SpanLink';
// import TopNavbar from '../../react-components/TopNavbar';
// import UserEntry from '../../react-components/FreindEntry';
import FriendList from '../../react-components/Friend List';
import PostList from '../../react-components/Post List';

export default class Home extends React.Component {
      
    render() {
        const friends = [
            {name: 'Ben', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Jack', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Abby', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'George', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Olivia', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'Emily', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'User', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'User', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'User', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'User', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'User', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
            {name: 'User', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'},
          ];
        const posts = [
            {tag: 'Advice/Fitness', content: {text:'Should I be streching before I workout?? My shoulder is starting to hurt after pull days...', have_pic: false, picture:""}, 
                user:{ username:'Ben', avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}, 
                comments: [{user:'George', comment: 'Yeah, Streching is important...'}, {user: "user", comment: "#Comment 2"}, {user: "user", comment: "#Comment 3"}, 
                {user: "user", comment: "#Comment 4"}], likes: '4'},
            {tag: 'Recipie', content: {text:'Eating Healthy today! The recipie for this is...', have_pic: true 
            , picture:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_foods_fitness_slideshow/493ss_Thinkstock_rf_grilled_chicken_breast.jpg'}, 
                user:{ username:'Ben', avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}, 
                comments: [{user:'Emily', comment: 'Looks Great! I\'ll try making this next time too.'}], likes: '8'},
          ];

        return (
            <div id="homeContainer">
                <div id="friendListContainer">
                    <FriendList entries={friends}/>
                </div>
                <div id="postListContainer">
                    <PostList entries={posts}/>
                </div>
                <div id="postButtonContainer">
                    <IconButton id="postButton">
                        <AddCircleIcon id="cicleIcon" style={{fontSize:60}}/>
                    </IconButton>
                </div>
            </div>
        );
    }
}