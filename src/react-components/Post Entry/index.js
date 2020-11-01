import React from 'react';
import {ListGroup} from 'react-bootstrap';

import './styles.css';

export default class PostEntry extends React.Component {
    render() {
        const {tag, content, user, comments, likes} = this.props;
        const commentRows = [];

        comments.forEach((userComment) => {
            commentRows.push(
                <ListGroup.Item className="commentListItem">
                    <div className="commentuser">{userComment.user}</div>
                    <div className="comment">{userComment.comment}</div>
                </ListGroup.Item>
            );
        });

        const image = [];
        if (content.picture == "") {
            image.push(<img className='noimg' src={content.picture}/>);
        } else {
            image.push(<img className='img' src={content.picture}/>);
        }
        
        return (
            <div className="PostEntryContainer">
                <div className="tag">{tag}</div>
                <div className="user">
                    <img className="avatar" src={user.avatar}/>
                    <div className="username">{user.username}</div>
                </div>
                <div className="text">{content.text}</div>
                <div className="imageContainer">{image}</div>
                <div className="likes">{likes}</div>
                <ListGroup className="commentSection">{commentRows}</ListGroup>
            </div>
        );
    }
}