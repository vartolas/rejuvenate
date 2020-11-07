import React from 'react';

import './styles.css';

import SpanLink from '../../react-components/Span Link';

export default class RecordStatistics extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
        }
    }
    render(){
        return (
            <div id="recordStatViewContainer">
                <h1>This is the Record Statistics page</h1>
                
                <SpanLink to="/statistics/edit" name="edit"/>
            </div>    
        );
    }
}