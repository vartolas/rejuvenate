import React from 'react';

import SpanLink from '../../react-components/SpanLink';

import './styles.css';

export default class CreatePost extends React.Component {
    render (){
        return (
            <div id="createStatViewContainer">
                <h1>Create New Post</h1>
                    <form>
                        <input name="Title" type="text"/>
                    </form>
                <SpanLink to="/home" name="return"/>

            </div>
        );
    }
}
