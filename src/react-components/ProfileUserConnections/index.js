import React from 'react';
import './styles.css';

import SmallProfileBar from '../../react-components/SmallProfileBar';

export default class ProfileUserConnections extends React.Component {

  state = {
    showingFollowers: true
  }

  renderNavBar() {
    if (this.state.showingFollowers) {
      return (
        <div id='userConnectionsNav'>
          <ul>
            <li className='blackBottomBorder' onClick={ () => this.setState({ showingFollowers: true }) }><span><b>Followers</b></span></li>
            <li onClick={ () => this.setState({ showingFollowers: false }) }><span>Following</span></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div id='userConnectionsNav'>
          <ul>
            <li onClick={ () => this.setState({ showingFollowers: true }) }>Followers</li>
            <li className='blackBottomBorder' onClick={ () => this.setState({ showingFollowers: false }) }><b>Following</b></li>
          </ul>
        </div>
      );
    }
  }

  renderUserConnections() {
    /* Pull user followers and following lists here! Note that user obejcts
    have many more attribtues than just name, username, and profilePicSrc.
    */
    const followers = [
      {
        name: "Steve Jones",
        username: "jonesinator10984",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Jonathan Peters",
        username: "johnthemon",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Mathy Cathy",
        username: "catlover22",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Jessica Pearson",
        username: "jessicaisthebestsica",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Harvey Spector",
        username: "bestcloserinthecity",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Walter White",
        username: "heisenberg1963",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Jesse Pinkman",
        username: "yoyospicyyo",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Wonder Woman",
        username: "wonderwoman",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Auston Matthews",
        username: "hitemwiththe4",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Mats Sundin",
        username: "sundinthequeen",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      }
    ]

    const following = [
      {
        name: "Demar DeRozan",
        username: "dbo_10",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Kyle Lowry",
        username: "bigklo7",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Neil Armstrong",
        username: "spacelover00_",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "JJ Smith",
        username: "jjjjssssmith",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Simona Halep",
        username: "imi_place_tenisul",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Walter White",
        username: "heisenberg1963",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Jesse Pinkman",
        username: "yoyospicyyo",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Spiderman",
        username: "spidey_99",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Auston Matthews",
        username: "hitemwiththe4",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      },
      {
        name: "Mats Sundin",
        username: "sundinthequeen",
        profilePicSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      }
    ]

    let listItems;
    if (this.state.showingFollowers) {
      listItems = followers.map((f) => {
        return (<SmallProfileBar key={followers.indexOf(f)} isFollower={ true } name={ f.name } username={ f.username } imgSrc={ f.profilePicSrc } />);
      });
    } else {
      listItems = following.map((f) => {
        return(<SmallProfileBar key={followers.indexOf(f)} isFollower={ false } name={ f.name } username={ f.username } imgSrc={ f.profilePicSrc } />);
      });
    }

    return (
      <div>
        { listItems }
      </div>
    );


  }

  render() {
    return (
      <div>
        { this.renderNavBar() }
        <div id='userConnections'>
          { this.renderUserConnections() }
        </div>
      </div>
    );
  }
}
