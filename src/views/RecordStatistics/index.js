import React from 'react';

import './styles.css';

import SpanLink from '../../react-components/SpanLink';
import {Link} from 'react-router-dom';
import {StatChart} from '../Statistics';

//example of one statistic, this will be retrieved from database, maybe based on query parameters
var stat = {
        type: 'scatter',
        title: "Jogging Distance Stats",
        xAxes: "days since Januray 1st 2020",
        yAxes: "distance ran (km)",
        data: [{x: 1, y: 1}, {x: 2, y: 5}, {x: 3, y: 3}, {x: 4, y: 4}, {x: 5, y: 5}]
    }

export default class RecordStatistics extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stat: stat
        }
        this.num_point_ids = 0
    }

    new_point_id = () => "point".concat(++this.num_point_ids);

    render(){
        this.num_point_ids = 0;
        
        return (
            
            <div id="recordStatViewContainer">
                <h1>Record Stats</h1>

                <h2>Add New Entry</h2>
                <div id="addNewEntrySection">
                    
                    <div id="newDataPointSection">
                        <form>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><span id="xAxesLabel">{this.state.stat.xAxes}</span> </td>
                                        <td><input id="newXEntryInput" type="text"></input></td>
                                    </tr>
                                    <tr>
                                        <td><span id="yAxesLabel">{this.state.stat.yAxes}</span></td> 
                                        <td><input id="newYEntryInput" type="text"></input></td>
                                    </tr>
                                </tbody>
                            </table>
                        
                            <button  id="newEntryButton" onClick={this.handleNewEntry}>Add New Entry</button> 
                        </form>  
                    </div>
                    <div id="statChartDisplayContainer">
                        <StatChart id="statChartDisplay" stat={this.state.stat}/>
                    </div> 
                </div>
                <div id="editEntriesSectionContainer">
                    <h2>Exisiting Entries</h2>
                    <div id="editExistingStatContainer">
                        <div id="labelsContainer">
                            <span id="xAxesLabel">{this.state.stat.xAxes}</span> 
                            <span id="XAxesLabel">{this.state.stat.yAxes}</span>
                        </div>
                        <div id="editExistingStatScroll">
                            {this.state.stat.data.map((point, index) => {
                                
                                var point_id = this.new_point_id();
                                return (
                                <div id={point_id} key={point_id} className="recordStatFormContainer">
                                    <form className="pointForm">
                                        <label>{point.x}</label>
                                        <label>{point.y}</label>
                                    </form>
                                    <button onClick={this.deletePoint(index).bind(this)}>-</button>
                                </div>
                            )}
                        )}
                    </div>

                </div>

                <Link to="/statistics">
                    <button id="confirmAllChangesButton" onClick={this.handleConfirmAllChanges}>Confirm All Changes</button>
                </Link>

                
            </div>
            </div>    
        );
    }

    handleConfirmAllEntries = (e) => {
        //upload to dataBase
    }

    handleNewEntry = (e) => {
        e.preventDefault();
        var x = parseInt(document.getElementById("newXEntryInput").value);
        var y = parseFloat(document.getElementById("newYEntryInput").value);

        if(this.state.stat.data.find(point => point.x === x)){
            alert("value has already been entered")
            return;
        }
        
        if(!isNaN(x) && !isNaN(y)){
            var new_stat = this.state.stat
            new_stat.data.push({x: x, y: y});
            new_stat.data.sort((point1, point2) => point1.x - point2.x);
            this.setState({stat: new_stat})
        }else{
            alert("invaid entries")
        }
    }

    deletePoint(index, e){
        return function(e){
            var new_stat = this.state.stat
            new_stat.data.splice(index,1)
            this.setState({stat: new_stat});
        }
    }

}


