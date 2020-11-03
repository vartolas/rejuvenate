import React from 'react';
import './styles.css';

export default class FriendEntry extends React.Component {
    render() {
        const {name, avatar} = this.props;
        return (
            <div className="friendEntryContainer">
                <img className='avatar' src={avatar} alt=""/>
                <div className="username">{name}</div>
            </div>
        );
    }
}