import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export default class CreateStatistic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			statTitle: "",
			statType: "",
			statXAxis: "",
			statYAxis: "",
		};
		this.formInfo = null;
		this.state = {
			createStatState: Initial,
			formIsValid: null,
		};
	}

	updateStatTitle = (e) => {
		e.preventDefault();
		this.setState({ statTitle: e.target.value });
	}

	updateStatType = (e) => {
		e.preventDefault();
		this.setState({ statType: e.target.value });
	}

	updateStatXAxis = (e) => {
		e.preventDefault();
		this.setState({ statXAxis: e.target.value });
	}

	updateStatYAxis = (e) => {
		e.preventDefault();
		this.setState({ statYAxis: e.target.value });
	}

	render() {
		return (
			<div id="createStatContainer">
				<span id="createStatTitle">Create New Statistic</span>
				<div id="createStatComponent">
					<FormControl>
						<TextField
							id="statisticsTextbox"
							value={this.state.statTitle}
							onChange={this.updateStatTitle}
							label="Name of Statistic"
						/>
						<TextField
							id="statisticsType"
							value={this.state.statType}
							onChange={this.updateStatType}
							label="Type of Statistic"
						/>
						<TextField
							id="statistics-x-axis"
							value={this.state.statXAxis}
							onChange={this.updateStatXAxis}
							label="X-Axis Label"
						/>
						<TextField
							id="statistics-y-axis"
							value={this.state.statYAxis}
							onChange={this.updateStatYAxis}
							label="Y-Axis Label"
						/>
						<br></br>
						<Button
							className="createStatisticsButton"
							onClick={this.createStatistic}
							href="/statistics"
							disabled={!this.state.statTitle
								|| !this.state.statType
								|| !this.state.statXAxis
								|| !this.state.statYAxis}
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

	createStatistic = (e) => {
		var title = document.getElementById("createStatTitleInput").value;
		var xAxisLabel = document.getElementById("createStatX-AxisInput").value;
		var yAxisLabel = document.getElementById("createStatY-AxisInput").value;
		var type = document.getElementById("createStatTypeSelect").value;

		if (!title || !xAxisLabel || !yAxisLabel) {
			this.setState({ createStatState: Unsuccessfull });
		} else {
			this.formInfo = {
				title: title,
				xAxisLabel: xAxisLabel,
				yAxisLabel: yAxisLabel,
				type: type,
			};
			this.setState({ createStatState: Successfull });
		}

		console.log("created stat", title, xAxisLabel, yAxisLabel, type);
	};
}

function Initial() {
	return null;
}

function Unsuccessfull() {
	return <span>unsuccessfull</span>;
}

function Successfull() {
	return <span>Successfull</span>;
}
