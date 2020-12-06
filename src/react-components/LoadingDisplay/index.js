import React from 'react';

export default class LoadingDisplay extends React.Component {
    render(){
        return (
            <div id="loadingDisplayContainer">
                <span className="loadingDisplayText">
                    Loading ...
                </span>
            </div>
        )
    }
}