import React from 'react';
import './styles.css';
import { getUsersAsList } from '../../userData.js';

import SmallProfileBar from '../../react-components/SmallProfileBar';
import PostList from "../../react-components/PostList";

export default class AdminDashboardSearchBar extends React.Component {
  state = {
    query: '',
    matchedPosts: [],
    posts: [],
    comments: []
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

    // Initialize posts and comments
    const users = getUsersAsList();
    const posts = [];
    const comments = [];


    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].posts.length; j++) {
        posts.push(users[i].posts[j]);
        for (let k = 0; k < users[i].posts[j].comments.length; k++) {
          comments.push(users[i].posts[j].comments[k]);
        }
      }
    }

    for (let i = 0; i < posts.length; i++) {
      posts[i].pid = i;
    }

    for (let i = 0; i < comments.length; i++) {
      comments[i].cid = i;
    }

    this.setState({ posts: posts, comments: comments });
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
      if (post.content.text.toLowerCase().includes(this.state.query.toLowerCase())) {
        return true;
      }

      for (let i = 0; i < post.comments.length; i++) {
        if (post.comments[i].comment.toLowerCase().includes(this.state.query.toLowerCase())) {
          return true
        }
      }
    })

    matchedPosts.map(post => {
      for (let i = 0; i < post.comments.length; i++) {
        if (!this.state.comments.includes(post.comments[i])) {
          post.comments.splice(post.comments.indexOf(post.comments[i]), 1);
        }
      }
    });

    this.setState({matchedPosts: matchedPosts});
  }

  removePost(pid) {
    const posts = this.state.posts;
    let i = 0;
    while (this.state.posts[i].pid != pid) {
      i++;
    }
    posts.splice(i, 1);
    this.setState({ posts: posts }, this.setMatchedPosts.bind(this));
  }

  removeComment(cid) {
    const comments = this.state.comments;
    let i = 0;
    console.log(this.state)
    while (this.state.comments[i].cid != cid) {
      i++;
    }
    comments.splice(i, 1);
    this.setState({ comments: comments }, this.setMatchedPosts.bind(this));
  }

  render() {
    return (
      <div id='adminSearchBar'>
        <div className='searchSettings'>
          <input autocomplete='off' onKeyUp={ this.handleInput.bind(this) } type='text' placeholder='Search for a post or comment...' />
        </div>

        <PostList removable={ true } removePost={ this.removePost.bind(this) } removeComment={ this.removeComment.bind(this) } posts={ this.state.matchedPosts } listComponent={ this }/>
      </div>

    );
  }
}
