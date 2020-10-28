import React from 'react';
import {Link} from 'react-router-dom';
import Chart from 'chart.js';

import './styles.css';

const user = null; //global variable should be set when user logs in
function get_user_stats(user){
    //fectch user stats
    //should return dictionary of user statistics
    //for now we hardcode
    var user_stats = [
        {
            category: 'Fitness',
            stats: [
                {
                    type: 'scatter',
                    title: "Jogging Distance Stats",
                    data: [{x: 1, y: 1}, {x: 2, y: 5}, {x: 3, y: 3}, {x: 4, y: 4}, {x: 5, y: 5}]
                },
                {
                    catgory: 'fitness',
                    type: 'scatter',
                    title: "Bench Press Stats",
                    data: [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 5}, {x: 4, y: 4}, {x: 5, y: 5}]
                },
                {
                    catgory: 'fitness',
                    type: 'scatter',
                    title: "Squat PR",
                    data: [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 5}, {x: 4, y: 4}, {x: 5, y: 5}]
                },
                {
                    catgory: 'fitness',
                    type: 'scatter',
                    title: "Deadlift PR",
                    data: [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 5}, {x: 4, y: 4}, {x: 5, y: 5}]
                },

         ]
        },
        {
            category: 'Nutriton',
            stats: [
                {
                    type: 'scatter',
                    title: "Calories in the day",
                    data: [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 4, y: 2}, {x: 5, y: 2}]
                }
            ]
        }  
    ]

    return user_stats;
}


export default class Statistics extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_stats: get_user_stats(user),
        };
        this.num_stat_ids = 0;
       
    }

    new_stat_id = () => this.num_stat_ids++;

    render(){
        return (
            <div id="statViewContainer">
                {this.state.user_stats.map(category => (
                    <div className="categoryContainer">
                    <span className="categoryTitle">{category.category}</span>
                        <StatChartsContainer 
                            stats={category.stats}
                            new_stat_id={this.new_stat_id}/>
                    </div>
                    ))
                }    
            </div>
        );
    }
}

class StatChartsContainer extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            stats: this.props.stats
        }
        this.new_stat_id = this.props.new_stat_id;
    }

    render(){
        return (
            <div className="statsContainer">
                {this.state.stats.map(stat => (
                        <StatChart id={this.new_stat_id()}
                            title={stat.title} 
                            type={stat.type} 
                            data={stat.data}/>
                    ))
                }
                <div className="addStatButtonTableContainer">
                    <Link to="/statistics/create">
                        <button className="addStatButton">+</button>
                    </Link>
                </div>
            </div> 
        );
    }
}

class StatChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            type: this.props.type,
            data: this.props.data,
            chart: null,
            
        };
    }
    render(){
        return (
            <div className="chartContainer">
                <canvas className="chartCanvas" id={this.state.id}></canvas>
            </div>    
        );
    }

    componentDidMount(){
        var ctx = document.getElementById(this.state.id).getContext('2d');
        this.chart = new Chart(ctx, {
            type: this.state.type, 
            data: {
                datasets: [
                    {
                        label: this.state.title,
                        data: this.state.data,
                        backgroundColor: 'white',
                        borderColor: 'white',
                        pointBackgroundColor: 'white',
                        fill: false,
                        tension: 0.5,
                        pointHoverRadius: 5,
                        pointRadius: 3,
                        showLine: true,
                    }
                
                ]
            }, 
            
            options: options,
        });
    }
}

const options = {
    responsive: true,
    aspectRatio: 1.25,
    scaleFontColor: 'white',
    
    legend: {
        onClick: null,
        labels: {
            fontColor: "white",
            boxWidth: 0,
        }
    },
    scales: {
        xAxes: [{ 
            scaleLabel: {
                display: true,
                labelString: "X axis",
                fontColor: "white"
            },
            gridLines: {
                display: false,
            },
            ticks: {
                display: true,
                fontColor: "white", // this here
            },
            
        }],

        yAxes: [{
            scale: {
                labelString: "X Axis"
            },
            display: true,
            gridLines: {
                display: false,
            },
            ticks: {
                display: true,
                fontColor: "white",
            }
        }],
    }
};