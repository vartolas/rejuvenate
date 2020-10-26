import React from 'react';
import './styles.css';

import {Link} from 'react-router-dom';

export default class SpanLink extends React.Component {
    render(){
        return (
            <div className="spanLinkContainer">
                <Link to={this.props.to}>
                    <span>{this.props.name}</span>
                </Link>
            </div>
        );
    }
}