import React from 'react';
import {ListGroup} from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

import './styles.css';

export default class PostEntry extends React.Component {
    render() {
        const {tag, content, user, comments, likes} = this.props;
        const commentRows = [];

<<<<<<< HEAD:src/react-components/PostEntry/index.js
        let showcomments=[];
        const commentrows=[];

        if (comments.length > 3){
            showcomments = comments.slice(0, 3);
        }
        else{
            showcomments = comments;
        }
        showcomments.forEach((usercomment) => {
            commentrows.push(
                <ListGroup.Item className="commentListItem" key={uuid()}>
                    <div className="commentuser">{usercomment.user}</div>
                    <div className="comment">{usercomment.comment}</div>
=======
        comments.forEach((userComment) => {
            commentRows.push(
                <ListGroup.Item className="commentListItem">
                    <div className="commentuser">{userComment.user}</div>
                    <div className="comment">{userComment.comment}</div>
>>>>>>> e10e670e78ce2e98bf890dc9a93c000bca47f1c8:src/react-components/Post Entry/index.js
                </ListGroup.Item>
            );
        });

        const image = [];
<<<<<<< HEAD:src/react-components/PostEntry/index.js

        if (content.have_pic){
            image.push(<img className='img' src={content.picture} key={uuid()}/>);
=======
        if (content.picture === "") {
            image.push(<img className='noimg' src={content.picture} alt="" />);
        } else {
            image.push(<img className='img' src={content.picture} alt="" />);
>>>>>>> e10e670e78ce2e98bf890dc9a93c000bca47f1c8:src/react-components/Post Entry/index.js
        }
        // else{
        //     image.push(<img className='img' src={content.picture}/>);
        // }
        
        return (
            <div className="PostEntryContainer">
                <div className="tag">{tag}</div>
                <div className="user">
                    <img className="avatar" src={user.avatar} alt="" />
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