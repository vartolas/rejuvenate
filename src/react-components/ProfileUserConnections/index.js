import React from 'react';
import './styles.css';

import SmallProfileBar from '../SmallProfileBar';

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
    let listItems;
    if (this.state.showingFollowers) {
      listItems = this.props.followers.map((f, index) => {
        return (<SmallProfileBar uid={ f.uid } key={index} isFollower={ true } name={ f.name ? f.name : f.firstName + " " + f.lastName } username={ f.username } imgSrc={ f.imgSrc } />);
      });
    } else {
      listItems = this.props.following.map((f, index) => {
        return(<SmallProfileBar uid={ f.uid } user={ f } unfollow={ this.props.unfollow } key={index} isFollower={ false } name={ f.name ? f.name : f.firstName + " " + f.lastName } username={ f.username } imgSrc={ f.imgSrc } />);
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
      <div id='userConnections'>
        { this.renderNavBar() }
        <div id='userConnectionsList'>
          { this.renderUserConnections() }
        </div>
      </div>
    );
  }
}
