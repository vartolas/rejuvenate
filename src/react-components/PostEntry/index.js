import React from 'react';
import {ListGroup} from 'react-bootstrap';

import './styles.css';

export default class PostEntry extends React.Component {
    render(){
        const {tag, content, user, comments, likes} = this.props;

        const commentrows=[];

        comments.forEach((usercomment) => {
            commentrows.push(
                <ListGroup.Item className="listItem">
                    <div className="commentuser">{usercomment.user}</div>
                    <div className="comment">{usercomment.comment}</div>
                </ListGroup.Item>
            );
        });
        
        return (
            <div className="PostEntryContainer">
                <div className="tag">{tag}</div>
                <div className="text">{content.text}</div>
                <img className="img" src={content.picture}/>
                <div className="user">{user}</div>
                <div className="likes">{likes}</div>
                <ListGroup className="commentSection">{commentrows}</ListGroup>
            </div>
        );
    }
}