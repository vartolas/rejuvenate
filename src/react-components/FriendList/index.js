import React from 'react';
import FriendEntry from '../FreindEntry';
import {ListGroup} from 'react-bootstrap';
import './styles.css';

export default class ProductTable extends React.Component {
    render() {
      const rows = [];
      let lastEntryName = null;
      
      this.props.entries.forEach((entry) => {
        if (entry.name !== lastEntryName) {
        rows.push(
            <ListGroup.Item>
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