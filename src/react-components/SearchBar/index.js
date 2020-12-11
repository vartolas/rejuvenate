import React from 'react';
import './styles.css';
import { getUsersAsList } from '../../userData.js'

import SmallProfileBar from '../../react-components/SmallProfileBar';

export default class SearchBar extends React.Component {
  state = {
    query: ''
  }

  handleInput(e) {
    this.setState({ query: e.target.value });
    document.querySelector('#searchedProfilesContainer').style.display = 'block';
  }

  isSearchBarChild(e) {
    let element = e;
    const searchBar = document.querySelector('#searchBar');

    while (element.parentNode != null) {
      if (element.parentNode === searchBar) {
        return true;
      }
      element = element.parentNode
    }

    return false;
  }

  handleMouseUp(e) {
    const searchBar = document.querySelector('#searchBar');
    const searchedProfilesContainer = document.querySelector('#searchedProfilesContainer');
    if (!this.isSearchBarChild(e.target)) {
      searchedProfilesContainer.style.display = 'none';
    }

    if (this.isSearchBarChild(e.target) && searchedProfilesContainer.style.display === 'none') {
      searchedProfilesContainer.style.display = 'block';
    }
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp.bind(this));
  }

  getSearchedUsers() {
    const users = getUsersAsList();
    const matchedUsers = users.filter( user => user.username.toLowerCase().startsWith(this.state.query.toLowerCase()) || (user.firstName + " " + user.lastName).toLowerCase().startsWith(this.state.query.toLowerCase()));
    const firstMatchedUsers = matchedUsers.slice(0, 5);

    return (
      <div>
      {
        firstMatchedUsers.map( (user) => {
          return (
            <SmallProfileBar key={user.uid} uid={ user.uid } isFollower={ true } name={ user.firstName + " " + user.lastName } username={ user.username } imgSrc='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' />
          )
        })
      }
      </div>
    )
  }

  render() {
    return (
      <div id='searchBar'>
        <input autoComplete='off' onKeyUp={ this.handleInput.bind(this) } type='text' name='searchBar' id='searchBar' placeholder='Search for a user...' />
        <div id='searchedProfilesContainer' style={{ display: 'none' }}>
          <div id='searchBarSeparator'></div>

          { this.getSearchedUsers() }

        </div>
      </div>

    );
  }
}
