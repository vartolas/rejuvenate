import React from 'react';
import FriendEntry from '../Friend Entry';
import {ListGroup} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import './styles.css';

export default class FriendList extends React.Component {
    render() {
      const rows = [];
      let lastEntryName = null;
      
      this.props.entries.forEach((entry) => {
        if (entry.name !== lastEntryName) {
<<<<<<< HEAD:src/react-components/FriendList/index.js
        rows.push(
            <ListGroup.Item className="friendListItem" key={uuid()}>
                <FriendEntry
                    name={entry.name}
                    avatar={entry.avatar} />
            </ListGroup.Item>
        );
=======
            rows.push(
                <ListGroup.Item className="friendListItem">
                    <FriendEntry name={entry.name} avatar={entry.avatar} />
                </ListGroup.Item>
            );
>>>>>>> e10e670e78ce2e98bf890dc9a93c000bca47f1c8:src/react-components/Friend List/index.js
        }}
    );
    return (
        <ListGroup>
            {rows}
        </ListGroup>
      );
    }

}