import React from 'react';

import SpanLink from '../../react-components/SpanLink';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import './styles.css';

export default class CreateStatistic extends React.Component {

    constructor (props) {
        super(props);
        this.formInfo = null;

        this.state = {
            createStatState: Initial,
            formIsValid: null,
        }
    }

    render (){
        return (
            <div id="createStatViewContainer">
                <span id="createStatTitle">Create New Statistic</span>
                <div id="createStatSectionContainer">
                    <div id="createStatFormContainer">
                        
                        <form id="createStatForm">
                            <label>Category:</label>
                            <select id="createStatTypeSelect" name="type">
                                <option value="Nutrition">Nutrition</option>
                                <option value="Fitness">Fitness</option>
                            </select>

                            <label>Title:</label>
                            <input id="createStatTitleInput" type="text"/><br/>

                            <label>X-Axis label:</label>
                            <input id="createStatX-AxisInput" type="text"/>

                            <label>Y-Axis label:</label>
                            <input id="createStatY-AxisInput" type="text"/>

                            <label>Type:</label>
                            <select id="createStatTypeSelect" name="type">
                                <option value="bar">Bar Graph</option>
                                <option value="line">Line Graph</option>
                            </select>

                        </form>
                        <Link to="/recordStatistics">
                            <button id="createButton" onClick={this.createStatistic}>Create</button>
                        </Link>
                        <div>
                            {this.state.createStatState()}
                        </div>
                        <SpanLink to="/statistics" name="return"/>
                    </div>
                    <div id="chooseTemplateContainer">
                        
                    </div>

                </div>
            </div>
        );
    }

    createStatistic = (e) => {
        

        var title = document.getElementById("createStatTitleInput").value;
        var xAxisLabel = document.getElementById("createStatX-AxisInput").value;
        var yAxisLabel = document.getElementById("createStatY-AxisInput").value;
        var type = document.getElementById("createStatTypeSelect").value;

        if (!title || !xAxisLabel || !yAxisLabel){
            this.setState({createStatState: Unsuccessfull});
        }else {
            
            this.formInfo = {
                title: title,
                xAxisLabel: xAxisLabel,
                yAxisLabel: yAxisLabel,
                type: type,
            }
            this.setState({createStatState: Successfull});
        }

        console.log("created stat", title, xAxisLabel, yAxisLabel, type);

    }
}

function Initial () {
    return null;
}

function Unsuccessfull () {
    return (
        <span>unsuccessfull</span>
    );
}

function Successfull () {
    return (
        <span>Successfull</span>
    );
}

