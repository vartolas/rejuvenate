import React from 'react';
import './styles.css';

export default class FavouriteThing extends React.Component {

  renderRemoveButton() {
    if (this.props.removable) {
      return (
        <div onClick={ () => this.props.onEditableButtonClick(this.props.name) } id='removeFavouriteThingBtn'><span id='removeFavouriteThingText'>-</span></div>
      )
    }
  }

  renderAddButton() {
    if (this.props.addable) {
      return (
        <div onClick={ () => this.props.onEditableButtonClick(this.props.name) } id='addFavouriteThingBtn'><span id='addFavouriteThingText'>+</span></div>
      )
    }
  }

  render() {
    const { imgSrc, name } = this.props;
    return (
      <div id='favouriteThing'>
        { this.renderRemoveButton() }
        { this.renderAddButton() }
        <div id='desc-box'>
          <img id='favouriteThingImg' src={ imgSrc } alt='profile pic'/>
          <div id='favouriteThingName'>{ name }</div>
        </div>
      </div>
    );
  }
}
