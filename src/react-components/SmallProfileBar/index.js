import React from 'react';
import './styles.css';
import { Link, refresh } from "react-router-dom";

export default class SmallProfileBar extends React.Component {

  getNormalBar() {
    const { name, username, imgSrc } = this.props;

    const linkTarget = {
      pathname: this.props.uid ? "/otherUserProfile" : "/userProfile",
      state: {uid: this.props.uid},
      key: 0
    };

    return (
      <div id='smallProfileBar'>
        <Link onClick={ () => {this.forceUpdate()} } to={linkTarget}>
          <div id='smallProfileBarLinkFull'>
            <img id='smallProfileImg' src={ imgSrc } alt='profile pic'/>
            <div id='smallProfileInfo'>
              <h5 id='smallProfileName'>{ name }</h5>
              <h6 id='smallProfileUsername'>@{ username }</h6>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  getUnfollowableBar() {
    const { name, username, imgSrc } = this.props;

    const linkTarget = {
      pathname: this.props.uid ? "/otherUserProfile" : "/userProfile",
      state: {uid: this.props.uid},
      key: 0
    };

    return (
      <div id='smallProfileBar'>
        <Link onClick={ () => {this.forceUpdate()} } to={linkTarget}>
          <div id='smallProfileBarLinkPartial'>
            <img id='smallProfileImg' src={ imgSrc } alt='profile pic'/>
            <div id='smallProfileInfo'>
              <h5 id='smallProfileName'>{ name }</h5>
              <h6 id='smallProfileUsername'>@{ username }</h6>
            </div>
          </div>
        </Link>
        <div onClick={ () => this.props.unfollow(this.props.user) } id='unfollowButtonSmall'>Unfollow</div>
      </div>
    )
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
        { this.props.canUnfollow ? this.getUnfollowableBar() : this.getNormalBar() }
      </div>
    );
  }
}
