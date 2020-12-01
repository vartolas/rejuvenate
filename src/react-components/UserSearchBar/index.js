import React from 'react';
import './styles.css';
import { getUsersAsList } from '../../userData.js';

import SmallProfileBar from '../../react-components/SmallProfileBar';

export default class PostSearchBar extends React.Component {
  state = {
    query: '',
    matchedUsers: [],
    users: []
  }

  handleInput(e) {
    this.setState({ query: e.target.value }, this.setMatchedUsers);
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
    // Initialize posts and comments
    const users = getUsersAsList();
    this.setState({ users: users });
  }

  setMatchedUsers() {
    const matchedUsers = this.state.users.filter(user => {
      const name = user.name ? user.name : user.firstName + " " + user.lastName;
      if (user.username.toLowerCase().startsWith(this.state.query.toLowerCase()) ||
          name.toLowerCase().startsWith(this.state.query.toLowerCase())) {
        return true;
      }
    })

    this.setState({matchedUsers: matchedUsers});
  }

  removeUser(uid) {
    const users = this.state.users;
    let i = 0;
    while (this.state.users[i].uid != uid) {
      i++;
    }
    users.splice(i, 1);
    this.setState({ users: users }, this.setMatchedUsers.bind(this));
  }

  render() {
    return (
      <div className='adminSearchBar'>
        <div className='searchSettings'>
          <input autocomplete='off' onKeyUp={ this.handleInput.bind(this) } type='text' placeholder='Search for a user...' />
        </div>

        {
          this.state.matchedUsers.map((user, i) => {
            console.log(user)
            return (
              <SmallProfileBar uid={ user.uid } user={ user } key={i} removeUser={this.removeUser.bind(this)} canUnfollow={ false } name={ user.name ? user.name : user.firstName + " " + user.lastName } username={ user.username } imgSrc={ user.profilePic } />
            )
          })
        }
      </div>

    );
  }
}
