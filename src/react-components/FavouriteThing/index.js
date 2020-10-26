import React from 'react';
import './styles.css';

import SpanLink from '../../react-components/SpanLink';
export default class FavouriteThing extends React.Component {

  render(){
    const { imgSrc, name } = this.props;

    return (
      <div id='favouriteThing'>

        <div id='desc-box'>
          <img id='favouriteThingImg' src={ imgSrc } />
          <div id='favouriteThingName'>{ name }</div>
        </div>

      </div>
    );
  }
}
