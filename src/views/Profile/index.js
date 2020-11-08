import React from 'react';
import './styles.css';

import UserInfo from '../../react-components/UserInfo'
import SpanLink from '../../react-components/SpanLink';
import ProfileUserConnections from '../../react-components/ProfileUserConnections';
import PostList from '../../react-components/PostList';

import { getUsers, getCurrentUser } from '../../userData.js';

// // Need to pull this user's information from somewhere.
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   username: 'johndoethebroe99',
//   profilePic: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
//   bio: "Hi, my name is John and I like to run. Bananas are my " +
//   "favourite fruit because they're easy to pack.",
//   favouriteThings: ['Bananas', 'Jogging', 'Hockey', 'Salads'],
//   posts: [
//       {
//         tag: 'Advice/Fitness',
//         content: {
//           text:'What do you guys think of my new kicks?!',
//           have_pic: true,
//           picture:'https://www.womenshealthsa.co.za/wp-content/uploads/2019/03/PUMA-Hybrid-NX-TZ.jpg'
//         },
//         user: {
//           username:'John Doe',
//           avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
//         },
//         comments: [
//           {user:'Cathy', comment: "Looks like you figured out how to post a pic!"},
//           {user:'Spiderman', comment: 'Fresh! Where from? I might have to get myself a pair!'}
//         ],
//         likes: '12'
//       },
//       {
//         tag: 'Help',
//         content: {
//           text:'How do I post a picture?! I NEED to show off my new kicks!!!!!',
//           have_pic: false,
//           picture:''
//         },
//         user: {
//           username:'John Doe',
//           avatar:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
//         },
//         comments: [
//           {user:'Cathy', comment: "Click on 'add image' after clicking the '+' icon on the home page!"}
//         ],
//         likes: '1'
//       }
//       ],
//   following: [
//       {
//         name: "Demar DeRozan",
//         username: "dbo_10",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Kyle Lowry",
//         username: "bigklo7",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Neil Armstrong",
//         username: "spacelover00_",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "JJ Smith",
//         username: "jjjjssssmith",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Simona Halep",
//         username: "imi_place_tenisul",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Walter White",
//         username: "heisenberg1963",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Jesse Pinkman",
//         username: "yoyospicyyo",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Spiderman",
//         username: "spidey_99",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Auston Matthews",
//         username: "hitemwiththe4",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Mats Sundin",
//         username: "sundinthequeen",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "George Clooney",
//         username: "curiousgeorge00",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Pen Pencilman",
//         username: "pennythepencil",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Jim Lu",
//         username: "jimmmmlu",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Bart Baker",
//         username: "bartismart",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Ivan Lendl",
//         username: "lendlivan",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       }
//     ],
//   followers: [
//       {
//         name: "Steve Jones",
//         username: "jonesinator10984",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Jonathan Peters",
//         username: "johnthemon",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Mathy Cathy",
//         username: "catlover22",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Jessica Pearson",
//         username: "jessicaisthebestsica",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Harvey Spector",
//         username: "bestcloserinthecity",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Walter White",
//         username: "heisenberg1963",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Jesse Pinkman",
//         username: "yoyospicyyo",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Wonder Woman",
//         username: "wonderwoman",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Auston Matthews",
//         username: "hitemwiththe4",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Mats Sundin",
//         username: "sundinthequeen",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "George Clooney",
//         username: "curiousgeorge00",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Pen Pencilman",
//         username: "pennythepencil",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       },
//       {
//         name: "Jim Lu",
//         username: "jimmmmlu",
//         profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//       }
//     ],
//   numFollowers: 13,
//   numFollowing: 15
// }


// Set up initial profile state.
const users = getUsers();
const user = users[getCurrentUser()];
const followersList = user.followers.map( uid => {
  return {
    name: users[uid].firstName + " " + users[uid].lastName,
    username: users[uid].username,
    imgSrc: users[uid].profilePic
  }
});
const followingList = user.following.map( uid => {
  return {
    name: users[uid].firstName + " " + users[uid].lastName,
    username: users[uid].username,
    imgSrc: users[uid].profilePic
  }
});

const userState = user;
userState.followers = followersList;
userState.following = followingList;

export default class Profile extends React.Component {
    state = userState;

    unfollow(followee) {
      // MODIFIES STATE OUTSIDE OF SETSTATE. IS THIS OK?
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

          <UserInfo user={ this.state } setFavourites={ this.setFavourites.bind(this) } setBio={ this.setBio.bind(this) } updateFavouriteThings={ this.updateFavouriteThings.bind(this) }/>

          <div id='middleProfilePageBar'>
            <div className='profilePageComp' id='userStatsPreview'>
              <h4>John's Pinned Stats</h4>
              <span id='viewMoreStatsText'>See more of John's stats</span>
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
