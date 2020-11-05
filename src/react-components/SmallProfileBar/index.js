import React from 'react';
import './styles.css';

export default class SmallProfileBar extends React.Component {

  getUnfollowButton() {
    if (!this.props.isFollower) {
      return (
        <span onClick={ () => this.props.unfollow(this.props.user) } id='unfollowButtonSmall'>Unfollow</span>
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
