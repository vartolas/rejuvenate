import React from 'react';
import './styles.css';

import SpanLink from '../../react-components/SpanLink';

export default class CreateStatistic extends React.Component {
    render (){
        return (
            <div>
                <h1>Create Statistic Page</h1>
                <SpanLink to="/statistics" name="return"/>
            </div>
        );
    }
}