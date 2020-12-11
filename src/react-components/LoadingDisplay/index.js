import React from 'react';
import "./styles.css";

export default class LoadingDisplay extends React.Component {
    render(){
        return (
            <div id="loadingDisplayContainer">
                <span className="loadingDisplayText" style={{fontSize: this.props.size}}>
                    Loading ...
                </span>
            </div>
        )
    }
}