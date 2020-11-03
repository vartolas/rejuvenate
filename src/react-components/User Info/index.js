import React from 'react';
import './styles.css';

import FavouriteThing from '../Favourite Thing';
export default class UserInfo extends React.Component {

  render(){
    // Must pull this data from somewhere.
    const userInfo = {
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoethebroe99',
      profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      numFollowers: 80,
      numFollowing: 61,
      bio: "Hi, my name is John and I like to run. Bananas are my " +
      "favourite fruit because they're good in smoothies. I like drinking " +
      "smoothies."
    }

    const { firstName, lastName, username, numFollowers, numFollowing, bio, profilePic } = userInfo;

    return (
      <div id='userInfo'>
        { /* Need to pull image, name, username, list of followers, list of users following, bio */ }
        <div className='userInfoComponent' id='userInfoMain'>
          <img src={ profilePic } alt='profile pic'/>
          <h1>{ firstName + " " + lastName }</h1>
          <h3>@{ username }</h3>
          <ul>
            <li><b>Followers</b><br /><span className='follow-amount'>{ numFollowers }</span></li>
            <li><b>Following</b><br /><span className='follow-amount'>{ numFollowing }</span></li>
          </ul>
          <div id='bio'>
            <p>{ bio }</p>
          </div>
        </div>
        <div className='userInfoComponent' id='favouriteThings'>
          { /* Need to pull favourite things here, and use the user's name */ }
          <h4>{ firstName }'s Favourites</h4>
          { /* These images are just placeholders for now and should NOT be submitted!! */ }
          <div id='favouriteThingsContainer'>
            <FavouriteThing name='Bananas' imgSrc='https://pixy.org/src/442/thumbs350/4428098.jpg'/>
            <FavouriteThing name='Jogging' imgSrc='https://pixy.org/src/86/865694.jpg'/>
            <FavouriteThing name='Hockey' imgSrc='https://pixy.org/src/428/4282288.jpeg'/>
            <FavouriteThing name='Salad' imgSrc='https://pixy.org/src/419/4197778.jpeg'/>
          </div>
        </div>
      </div>
    );
  }
}
