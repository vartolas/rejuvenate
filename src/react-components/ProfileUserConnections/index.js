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
            <li className='blackBottomBorder' onClick={ () => this.setState({ showingFollowers: true }) }><span><b>Followers ({ this.props.numFollowers ? this.props.numFollowers : this.props.followers.length })</b></span></li>
            <li onClick={ () => this.setState({ showingFollowers: false }) }>Following ({ this.props.numFollowing ? this.props.numFollowing : this.props.following.length })</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div id='userConnectionsNav'>
          <ul>
            <li onClick={ () => this.setState({ showingFollowers: true }) }>Followers ({ this.props.numFollowers ? this.props.numFollowers : this.props.followers.length })</li>
            <li className='blackBottomBorder' onClick={ () => this.setState({ showingFollowers: false }) }><b>Following ({ this.props.numFollowing ? this.props.numFollowing : this.props.following.length })</b></li>
          </ul>
        </div>
      );
    }
  }

  renderUserConnections() {
    let listItems;
    if (this.state.showingFollowers) {
      listItems = this.props.followers.map((f, index) => {
        return (<SmallProfileBar uid={ f.uid } key={index} canUnfollow={ false } name={ f.name ? f.name : f.firstName + " " + f.lastName } username={ f.username } imgSrc={ f.imgSrc } />);
      });
    } else {
      listItems = this.props.following.map((f, index) => {
        return(<SmallProfileBar uid={ f.uid } user={ f } unfollow={ this.props.unfollow } key={index} canUnfollow={ this.props.canUnfollow } name={ f.name ? f.name : f.firstName + " " + f.lastName } username={ f.username } imgSrc={ f.imgSrc } />);
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
