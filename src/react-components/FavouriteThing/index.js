import React from 'react';
import './styles.css';

export default class FavouriteThing extends React.Component {

  render(){
    const { imgSrc, name } = this.props;

    return (
      <div id='favouriteThing'>

        <div id='desc-box'>
          <img id='favouriteThingImg' src={ imgSrc } alt='profile pic'/>
          <div id='favouriteThingName'>{ name }</div>
        </div>

      </div>
    );
  }
}
