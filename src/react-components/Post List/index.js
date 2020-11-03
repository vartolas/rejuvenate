import React from 'react';
import PostEntry from '../Post Entry';
import {ListGroup} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import './styles.css';

export default class PostList extends React.Component {
    render() {
      const rows = [];
      
      this.props.entries.forEach((entry) => {
        rows.push(
            <ListGroup.Item className="postListItem" key={uuid()}>
                <PostEntry
                    tag={entry.tag}
                    content={entry.content}
                    picture={entry.picture}
                    user={entry.user}
                    comments={entry.comments}
                    like={entry.likes}
                    />
            </ListGroup.Item>
        );
        }
    );
    return (
        <ListGroup>
            {rows}
        </ListGroup>
      );
    }

}