import React from 'react';
import './styles.css';
import { getUsersAsList } from '../../userData.js'

import SmallProfileBar from '../../react-components/SmallProfileBar';

// This is a TEMPORARY list; change after we create the hardcoded data.
// const users = [
//   {
//     name: 'John Doe',
//     username: 'johndoethebroe99'
//   },
//   {
//     name: 'Steve Jones',
//     username: 'jonesinator10984'
//   },
//   {
//     name: 'Jonathan Peters',
//     username: 'johnthemon'
//   },
//   {
//     name: 'Mathy Cathy',
//     username: 'catlover22'
//   },
//   {
//     name: 'Jessica Pearson',
//     username: 'jessicaisthebestsica'
//   },
//   {
//     name: 'Walter White',
//     username: 'heisenberg1963'
//   },
//   {
//     name: 'Harvey Spector',
//     username: 'bestcloserinthecity'
//   },
//   {
//     name: 'Jesse Pinkman',
//     username: 'yoyospicyyo'
//   },
//   {
//     name: 'Wonder Woman',
//     username:'wonderwoman'
//   },
//   {
//     name: 'Auston Matthews',
//     username: 'hitemwiththe4'
//   },
//   {
//     name: 'George Clooney',
//     username: 'curiousgeorge00'
//   },
//   {
//     name: 'Pen Pencilman',
//     username: 'pennythepencil'
//   },
//   {
//     name: 'Jim Lu',
//     username: 'jimmmmlu'
//   },
//   {
//     name: 'Demar DeRozan',
//     username: 'dbo_10'
//   },
//   {
//     name: 'Kyle Lowry',
//     username: 'bigklo7'
//   },
//   {
//     name: 'Neil Armstrong',
//     username: 'spacelover00_'
//   },
//   {
//     name: 'JJ Smith',
//     username: 'jjjjssssmith'
//   },
//   {
//     name: 'Simona Halep',
//     username: 'imi_place_tenisul'
//   },
//   {
//     name: 'Bart Baker',
//     username: 'bartismart'
//   },
//   {
//     name: 'Ivan Lendl',
//     username: 'lendlivan'
//   },
//   {
//     name: 'Spiderman',
//     username: 'spidey_99'
//   }
// ]

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
            <SmallProfileBar isFollower={ true } name={ user.firstName + " " + user.lastName } username={ user.username } imgSrc='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' />
          )
        })
      }
      </div>
    )
  }

  render() {
    return (
      <div id='searchBar'>
        <input onKeyUp={ this.handleInput.bind(this) } type='text' name='searchBar' id='searchBar' placeholder='Search for a user' />
        <div id='searchedProfilesContainer' style={{ display: 'none' }}>
          <div id='searchBarSeparator'></div>

          { this.getSearchedUsers() }

        </div>
      </div>

    );
  }
}
