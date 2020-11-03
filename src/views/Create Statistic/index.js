import React from 'react';

import SpanLink from '../../react-components/Span Link';

import './styles.css';

export default class CreateStatistic extends React.Component {
    render (){
        return (
            <div id="createStatViewContainer">
                <h1>Create New Statistic</h1>
                    <form>
                        <input name="Title" type="text"/>
                    </form>
                <SpanLink to="/statistics" name="return"/>
                
            </div>
        );
    }
}