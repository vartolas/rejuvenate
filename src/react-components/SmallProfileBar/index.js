import React from 'react';
import './styles.css';

export default class SmallProfileBar extends React.Component {

  getUnfollowButton() {
    if (!this.props.isFollower) {
      return (
        <a id='unfollowButtonSmall'>Unfollow</a>
      )
    }
  }

  render(){
    // Need to pull this data!
    const { name, username, imgSrc } = this.props;

    return (
        <div id='smallProfileBar'>
          <img id='smallProfileImg' src={ imgSrc } alt='profile pic'/>
          <div id='smallProfileInfo'>
            <h5 id='smallProfileName'>{ name }</h5>
            <h6 id='smallProfileUsername'>@{ username }</h6>
          </div>
          { this.getUnfollowButton() }
        </div>
    );
  }
}
