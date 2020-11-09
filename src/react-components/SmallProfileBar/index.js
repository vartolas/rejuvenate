import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

export default class SmallProfileBar extends React.Component {

  getUnfollowButton() {
    if (!this.props.isFollower) {
      return (
        <span onClick={ () => this.props.unfollow(this.props.user) } id='unfollowButtonSmall'>Unfollow</span>
      )
    }
  }

  render() {
    const { name, username, imgSrc } = this.props;

    const linkTarget = {
      pathname: this.props.uid ? "/otherUserProfile" : "/userProfile",
      state: {uid: this.props.uid},
      key: 0
    };

    return (
      <div>
        <Link to={linkTarget}>
          <div id='smallProfileBar'>
            <img id='smallProfileImg' src={ imgSrc } alt='profile pic'/>
            <div id='smallProfileInfo'>
              <h5 id='smallProfileName'>{ name }</h5>
              <h6 id='smallProfileUsername'>@{ username }</h6>
            </div>
            {/* this.getUnfollowButton() */}
          </div>
        </Link>
      </div>
    );
  }
}
