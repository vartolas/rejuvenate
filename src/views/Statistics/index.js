import React from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js";
import ScrollMenu from "react-horizontal-scrolling-menu";

import "./styles.css";

const HOST_URL = process.env.HOST_URL || "http://localhost:5000";

function get_stats_by_category(stats){
	var stats_by_category = [];
	console.log(stats);
	console.log(stats.length);
	for(let i = 0; i < stats.length; i++){
		let category = stats_by_category.find(category => category.category === stats[i].category)
		if (category) {
			category.stats.push(stats[i])
		} else {
			stats_by_category.push({
				category: stats[i].category, 
				stats: [stats[i]]
			})
		}
	}
	return stats_by_category;
}

export default class Statistics extends React.Component {
	constructor(props) {
		super(props);
		this.num_canvas_ids = 0;
		this.state = {
			stats: null
		}
	}

	new_canvas_id = () => "statCanvas".concat(++this.num_canvas_ids);

	componentDidMount(){
		const userid = this.props.app.state.user._id
		fetch(`${HOST_URL}/api/users/${userid}/statistics`)
		.then(res => res.json())
		.then(json =>{
			this.setState({stats: json}); //causes component to re-render with new state
		})
	}

	render() {
		//if fetch has not net completed retrieving stats, put loading screen
		if(!this.state.stats){
			return (
				<div id="statViewContainer">
					<h1>loading</h1>
				</div>
			);
		}

		//if no stats render a page that tells user they have no stats
		if(this.state.stats.length === 0){
			return (
				<div id="statViewContainer">
					<h1>you dont have any stats yet!</h1>
				</div>
			);
		}
		//if execution gets here, then the stats are loaded and there is at least one stat, so load the full page

		//helper to create a format of the stats for this user that is easier to render
		var stats_by_category = get_stats_by_category(this.state.stats); 
		return (
			<div id="statViewContainer">
				{stats_by_category.map((category) => (
					<div key={category.category} className="categoryContainer">
						<span className="categoryTitle">{category.category}</span>
						<StatChartsContainer
							stats={category.stats}
							new_canvas_id={this.new_canvas_id}
						/>
					</div>
				))}
			</div>
		);
	}

}

class StatChartsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stats: this.props.stats,
		};
		this.new_canvas_id = this.props.new_canvas_id;
	}

	render() {
		const statsContainer = this.state.stats.map((stat) => {
			var id = this.new_canvas_id();
			return (
				<div key={id}>
					<Link to="/recordStatistics">
						<StatChart id={id} stat={stat} />
					</Link>
				</div>
			);
		});

		const Arrow = ({ text, className }) => {
			return <div className={className}>{text}</div>;
		};

		const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
		const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

		return (
			<div className="statsContainer">
				<div className="scrollMenu">
					<ScrollMenu
						data={statsContainer}
						arrowLeft={ArrowLeft}
						arrowRight={ArrowRight}
						wheel={false}
					/>
				</div>
				<div className="addStatButtonTableContainer">
					<Link to="/statistics/create">
						<button className="addStatButton">+</button>
					</Link>
				</div>
			</div>
		);
	}
}

export class StatChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,

			chart: null,
		};
		this.stat = this.props.stat;
	}
	render() {
		return (
			<div className="chartContainer">
				<canvas className="chartCanvas" id={this.state.id}></canvas>
			</div>
		);
	}
	componentDidUpdate() {
		this.drawChart();
	}
	componentDidMount() {
		this.drawChart();
	}

	drawChart() {
		var ctx = document.getElementById(this.state.id).getContext("2d");
		this.chart = new Chart(ctx, {
			type: "scatter",
			data: {
				datasets: [
					{
						label: this.stat.title,
						data: this.stat.data,
						backgroundColor: "white",
						borderColor: "white",
						pointBackgroundColor: "white",
						fill: false,
						tension: 0.5,
						pointHoverRadius: 5,
						pointRadius: 3,
						showLine: true,
					},
				],
			},

			options: {
				responsive: true,
				aspectRatio: 1.25,
				scaleFontColor: "white",

				legend: {
					onClick: null,
					labels: {
						fontColor: "white",
						boxWidth: 0,
					},
				},
				scales: {
					xAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: this.stat.xAxis,
								fontColor: "white",
							},
							gridLines: {
								display: false,
							},
							ticks: {
								display: true,
								fontColor: "white", // this here
							},
						},
					],

					yAxes: [
						{
							scaleLabel: {
								display: true,
								labelString: this.stat.yAxis,
								fontColor: "white",
							},
							display: true,
							gridLines: {
								display: false,
							},
							ticks: {
								display: true,
								fontColor: "white",
							},
						},
					],
				},
			},
		});
	}
}
