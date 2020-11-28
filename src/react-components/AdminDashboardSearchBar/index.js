import React from 'react';
import './styles.css';
import { getUsersAsList } from '../../userData.js';

import SmallProfileBar from '../../react-components/SmallProfileBar';
import PostList from "../../react-components/PostList";

export default class AdminDashboardSearchBar extends React.Component {
  state = {
    query: '',
    matchedPosts: [],
    posts: []
  }

  handleInput(e) {
    this.setState({ query: e.target.value }, this.setMatchedPosts);
  }

  isChildOf(element, potentialParent) {
    while (element.parentNode != null) {
      if (element.parentNode === potentialParent) {
        return true;
      }
      element = element.parentNode
    }

    return false;
  }

  componentDidMount() {
    // document.addEventListener("mouseup", this.handleMouseUp.bind(this));

    // Initialize posts.
    const users = getUsersAsList();

    const posts = [];
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].posts.length; j++) {
        posts.push(users[i].posts[j]);
      }
    }

    for (let i = 0; i < posts.length; i++) {
      posts[i].uid = i;
    }

    this.setState({posts: posts});
  }

  componentWillUnmount() {
    // document.removeEventListener("mouseup", this.handleMouseUp.bind(this));
  }

  // getSearchedUsers() {
  //   const users = getUsersAsList();
  //   const matchedUsers = users.filter( user => user.username.toLowerCase().startsWith(this.state.query.toLowerCase()) || (user.firstName + " " + user.lastName).toLowerCase().startsWith(this.state.query.toLowerCase()));
  //   const firstMatchedUsers = matchedUsers.slice(0, 10);
  //
  //   return (
  //     <div>
  //     {
  //       firstMatchedUsers.map( (user) => {
  //         return (
  //           <SmallProfileBar uid={ user.uid } isFollower={ true } name={ user.firstName + " " + user.lastName } username={ user.username } imgSrc='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' />
  //         )
  //       })
  //     }
  //     </div>
  //   )
  // }

  setMatchedPosts() {
    const matchedPosts = this.state.posts.filter(post => {
      if (post.content.text.toLowerCase().startsWith(this.state.query.toLowerCase())) {
        return true;
      }

      for (let i = 0; i < post.comments.length; i++) {
        if (post.comments[i].comment.toLowerCase().startsWith(this.state.query.toLowerCase())) {
          return true
        }
      }
    })

    this.setState({matchedPosts: matchedPosts});
    console.log(matchedPosts)
    console.log(this.state.posts)
  }

  // removePost(uid) {
  //   const currPosts = this.state.posts;
  //   let i = 0;
  //   while (this.state.posts[i].uid != uid) {
  //     i++;
  //   }
  //   currPosts.splice(i, 1);
  //   this.setState({ posts: currPosts });
  // }

  render() {
    return (
      <div id='adminSearchBar'>
        <input autocomplete='off' onKeyUp={ this.handleInput.bind(this) } type='text' placeholder='Search for a post or comment...' />
        <PostList removable={ true } posts={ this.state.matchedPosts } listComponent={ this }/>
      </div>

    );
  }
}
