import React from 'react';
import './styles.css';

export default class SmallProfileBar extends React.Component {

  getUnfollowButton() {
    if (!this.props.isFollower) {
      return (
        <button id='unfollowButtonSmall'>Unfollow</button>
      )
    }
  }

  render(){
    // Need to pull this data!
    const { name, username, imgSrc, isFollower } = this.props;

    return (
        <div id='smallProfileBar'>
          <img id='smallProfileImg' src={ this.props.imgSrc } />
          <div id='smallProfileInfo'>
            <h3 id='smallProfileName'>{ name }</h3>
            <h4 id='smallProfileUsername'>@{ username }</h4>
          </div>
          { this.getUnfollowButton() }
        </div>
    );
  }
}
