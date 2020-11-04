import React from 'react';
import FriendEntry from '../FriendEntry';
import {ListGroup} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import './styles.css';

export default class FriendList extends React.Component {
    render() {
      const rows = [];
      let lastEntryName = null;

      this.props.entries.forEach((entry) => {
        if (entry.name !== lastEntryName) {
        rows.push(
            <ListGroup.Item className="friendListItem" key={uuid()}>
                <FriendEntry
                    name={entry.name}
                    avatar={entry.avatar} />
            </ListGroup.Item>
        );
        }}
    );
    return (
        <ListGroup>
            {rows}
        </ListGroup>
      );
    }

}
