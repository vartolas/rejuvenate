import React from 'react';
import './styles.css';

import SpanLink from '../../react-components/SpanLink';
import FavouriteThing from '../../react-components/FavouriteThing';
export default class UserInfo extends React.Component {

  render(){
    return (
      <div id='userInfo'>
        { /* Need to pull image, name, username, list of followers, list of users following, bio */ }
        <div className='userInfoComponent' id='userInfoMain'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' />
          <h1>John Doe</h1>
          <h3>@johndoethebroe99</h3>
          <ul>
            <li><b>Followers</b><br /><span className='follow-amount'>80</span></li>
            <li><b>Following</b><br /><span className='follow-amount'>66</span></li>
          </ul>
          <div id='bio'>
            <p>Hi, my name is John and I like to run. <br/><br/> Bananas are my favourite fruit because they're good in smoothies. I like drinking smoothies.</p>
          </div>
        </div>
        <div className='userInfoComponent' id='favouriteThings'>
          { /* Need to pull favourite things here, and use the user's name */ }
          <p><b>John's Favourites</b></p>
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
