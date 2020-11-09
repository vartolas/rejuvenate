import React from 'react';
import './styles.css';

import ViewableUserInfo from '../../react-components/ViewableUserInfo'
import SpanLink from '../../react-components/SpanLink';
import ProfileUserConnections from '../../react-components/ProfileUserConnections';
import PostList from '../../react-components/PostList';

import { getUsers, getCurrentUser } from '../../userData.js';

export default class ViewableProfile extends React.Component {
    constructor(props) {
      super(props);
      this.setStateInsideConstructor();
    }

    componentWillReceiveProps(newProps) {
      this.setStateOutsideConstructor();
      this.forceUpdate()
    }

    componentDidMount() {
      console.log("did mount")
    }

    getStateObject() {
      // Set up initial profile state.
      const users = getUsers();
      const user = users[this.props.location.state.uid];


      const followersList = [];
      for (let i = 0; i < user.numFollowers; i++) {
        const uid = user.followers[i];
        followersList.push({
          uid: uid,
          name: users[uid].firstName + " " + users[uid].lastName,
          username: users[uid].username,
          imgSrc: users[uid].profilePic
        })
      }

      const followingList = [];
      for (let i = 0; i < user.numFollowing; i++) {
        const uid = user.following[i];
        console.log(uid);
        followingList.push({
          uid: uid,
          name: users[uid].firstName + " " + users[uid].lastName,
          username: users[uid].username,
          imgSrc: users[uid].profilePic
        })
      }

      // Create a deep copy of user.
      const userState = JSON.parse(JSON.stringify(user));
      userState.followers = followersList;
      userState.following = followingList;

      return userState;
    }

    setStateInsideConstructor() {
      this.state = this.getStateObject();
      console.log("Set state inside")
    }

    setStateOutsideConstructor() {
      this.setState(this.getStateObject());
      console.log("set state outside")
      console.log(this.state, this.props)

    }

    unfollow(followee) {
      this.state.following.splice(this.state.following.indexOf(followee), 1);
      this.setState((state, props) => ({
        numFollowing: state.numFollowing - 1
      }));
    }

    setFavourites(a) {
      this.setState({favouriteThings: a});
    }

    setBio(newBio) {
      this.setState({bio: newBio});
    }

    updateFavouriteThings(newFavouriteThings) {
      this.setState({favouriteThings: newFavouriteThings});
    }



    render() {


      return (
        <div id="profileContainer">

          <ViewableUserInfo user={ this.state } />

          <div id='middleProfilePageBar'>
            <div className='profilePageComp' id='userStatsPreview'>
              <h4>{ this.state.firstName }'s Pinned Stats</h4>
              <span id='viewMoreStatsText'>See more of { this.state.firstName }'s stats</span>
            </div>

            <div className='profilePageComp' id='userPosts'>
              <PostList posts={ this.state.posts } />
            </div>
          </div>

          <ProfileUserConnections followers={ this.state.followers } following={ this.state.following } unfollow={ this.unfollow.bind(this) }/>


        </div>
      )

    }
}
