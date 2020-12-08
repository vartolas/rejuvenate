import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const HOST_URL = process.env.HOST_URL || "http://localhost:5000";

export default class CreateStatistic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			category: "",
			xAxis: "",
			yAxis: "",
		};
	}

	updateStatTitle = (e) => {
		e.preventDefault();
		this.setState({ title: e.target.value });
	}

	updateStatCategory = (e) => {
		e.preventDefault();
		this.setState({ category: e.target.value });
	}

	updateStatXAxis = (e) => {
		e.preventDefault();
		this.setState({ xAxis: e.target.value });
	}

	updateStatYAxis = (e) => {
		e.preventDefault();
		this.setState({ yAxis: e.target.value });
	}

	createNewStatistic = () => {
		const title = document.querySelector("#statistic-title").value;
		const category = document.querySelector("#statistic-category").value;
		const xAxisLabel = document.querySelector("#statistic-x-axis").value;
		const yAxisLabel = document.querySelector("#statistic-y-axis").value;

		fetch(`${HOST_URL}/api/statistics`, {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userid: this.props.app.state.user._id,
				category: category,
				title: title,
				xAxis: xAxisLabel,
				yAxis: yAxisLabel
			})
		})
			.then(res => res.json())
			.then(newStat => this.setState({ newStat }))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div id="createStatContainer">
				<span id="createStatTitle">Create New Statistic</span>
				<div id="createStatComponent">
					<FormControl>
						<TextField
							id="statistic-title"
							value={this.state.title}
							onChange={this.updateStatTitle}
							label="Statistic Name"
						/>
						<TextField
							id="statistic-category"
							value={this.state.category}
							onChange={this.updateStatCategory}
							label="Statistic Category"
						/>
						<TextField
							id="statistic-x-axis"
							value={this.state.xAxis}
							onChange={this.updateStatXAxis}
							label="X-Axis Label"
						/>
						<TextField
							id="statistic-y-axis"
							value={this.state.yAxis}
							onChange={this.updateStatYAxis}
							label="Y-Axis Label"
						/>
						<br></br>
						<Button
							className="createStatisticsButton"
							onClick={this.createNewStatistic}
							href="/statistics"
							disabled={!this.state.title
								|| !this.state.category
								|| !this.state.xAxis
								|| !this.state.yAxis}
							variant="contained"
							disableElevation
						>
							Create New Statistic
						</Button>
						<Button
							className="createStatisticsButton"
							href="/statistics"
							variant="contained"
							disableElevation
						>
							Go Back
						</Button>
					</FormControl>
				</div>
			</div>
		);
	}
}
