import React from 'react';
import './styles.css';
import { getFavouriteThings, getFavouriteThingsToImages } from '../../userData.js';

import FavouriteThing from '../FavouriteThing';

export default class ViewableUserInfo extends React.Component {

  displayViewableBio() {
    return (
      <div id='viewableBio' className='bio'>
        <span className='breakLongWords'>{ this.props.user.bio }</span>
      </div>

    )
  }

  displayUneditableFavourites() {
    return (
      <div>
        {
          this.props.user.favouriteThings.map((f, index) => {
              return(<FavouriteThing key={ index } setFavourites={ this.props.setFavourites } addable={ false } removable={ false } index={ index } name={ f } imgSrc={ getFavouriteThingsToImages()[f] }/>)
          })
        }
      </div>
    )
  }

  render(){
    const { firstName, lastName, username, profilePic, numFollowers, numFollowing, bio, favouriteThings } = this.props.user;

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
          { this.displayViewableBio() }
        </div>
        <div className='userInfoComponent' id='favouriteThings'>
          { /* Need to pull favourite things here, and use the user's name */ }
          <h4>{ firstName + "'s Favourites" }</h4>
          { /* These images are just placeholders for now and should NOT be submitted!! */ }
          <div id='favouriteThingsContainer'>
            { this.displayUneditableFavourites() }
          </div>
        </div>
      </div>
    );
  }
}
