import React from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { v4 as uuid } from "uuid";
// import { IconButton } from "@material-ui/core";
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import "./styles.css";
import { UsbOutlined } from "@material-ui/icons";

const user = null; //global variable should be set when user logs in
function get_user_stats(user) {
	//fectch user stats
	//should return dictionary of user statistics
	//for now we hardcode
	var user_stats = [
		{
			category: "Fitness",
			stats: [
				{
					id: 1, //id assigned by database code
					type: "scatter",
					title: "Jogging Distance Stats",
					xAxes: "day",
					yAxes: "distance ran",
					data: [
						{ x: 1, y: 1 },
						{ x: 2, y: 5 },
						{ x: 3, y: 3 },
						{ x: 4, y: 4 },
						{ x: 5, y: 5 },
					],
				},
				{
					id: 2,
					type: "scatter",
					title: "Bench Press Stats",
					xAxes: "day",
					yAxes: "kg pressed",
					data: [
						{ x: 1, y: 2 },
						{ x: 2, y: 3 },
						{ x: 3, y: 5 },
						{ x: 4, y: 4 },
						{ x: 5, y: 5 },
					],
				},
				{
					id: 3,
					type: "scatter",
					title: "Squat PR",
					xAxes: "day",
					yAxes: "kg squatted",
					data: [
						{ x: 1, y: 2 },
						{ x: 2, y: 3 },
						{ x: 3, y: 5 },
						{ x: 4, y: 4 },
						{ x: 5, y: 5 },
					],
				},
				{
					id: 4,
					type: "scatter",
					title: "Deadlift PR",
					xAxes: "day",
					yAxes: "kg deadlifted",
					data: [
						{ x: 1, y: 2 },
						{ x: 2, y: 3 },
						{ x: 3, y: 5 },
						{ x: 4, y: 4 },
						{ x: 5, y: 5 },
					],
				},
			],
		},
		{
			category: "Nutriton",
			stats: [
				{
					type: "scatter",
					title: "Calories in the day",
					xAxes: "day",
					yAxes: "calories",
					data: [
						{ x: 1, y: 1 },
						{ x: 2, y: 2 },
						{ x: 3, y: 3 },
						{ x: 4, y: 2 },
						{ x: 5, y: 2 },
					],
				},
			],
		},
	];

	return user_stats;
}

export default class Statistics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user_stats: get_user_stats(user),
		};
		this.num_canvas_ids = 0;
	}

	new_canvas_id = () => "statCanvas".concat(++this.num_canvas_ids);

	render() {
		return (
			<div id="statViewContainer">
				{this.state.user_stats.map((category) => (
					<div key={category.category} className="categoryContainer">
						<span className="categoryTitle">{category.category}</span>
						{/* <IconButton className="likeButton" onClick={() => this.handle()}>
							    <KeyboardArrowLeftIcon className="filledLikeIcon" />
					    </IconButton> */}
						<StatChartsContainer
							stats={category.stats}
							new_canvas_id={this.new_canvas_id}
						/>
						{/* <IconButton className="likeButton" onClick={() => function(){}}>
							    <KeyboardArrowRightIcon className="filledLikeIcon" />
					    </IconButton> */}
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

		// statsContainer.push(
		// 	<div className="addStatButtonTableContainer" key={uuid()}>
		// 		<Link to="/statistics/create">
		// 			<button className="addStatButton">+</button>
		// 		</Link>
		// 	</div>
		// );

		const Arrow = ({ text, className }) => {
			return <div className={className}>{text}</div>;
		};

		const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
		const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

		return (
			<div className="statsContainer">
				{/* {this.state.stats.map((stat) => {
					var id = this.new_canvas_id();
					return (
						<div key={id}>
							<Link to="/recordStatistics">
								<StatChart id={id} stat={stat} />
							</Link>
						</div>
					);
				})} */}
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
			type: this.stat.type,
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
								labelString: this.stat.xAxes,
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
								labelString: this.stat.yAxes,
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
