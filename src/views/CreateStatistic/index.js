import React from "react";
import "./styles.css";

import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export default class CreateStatistic extends React.Component {
	constructor(props) {
		super(props);
		this.formInfo = null;

		this.state = {
			createStatState: Initial,
			formIsValid: null,
		};
	}

	render() {
		return (
			<div id="createStatContainer">
				<span id="createStatTitle">Create New Statistic</span>
				<div id="createStatComponent">
					<FormControl>
						<TextField
							id="statisticsTextbox"
							label="Name of Statistic"
						/>
						<TextField
							id="statisticsType"
							label="Type of Statistic"
						/>
						<TextField
							id="statistics-x-axis"
							label="X-Axis Label"
						/>
						<TextField
							id="statistics-y-axis"
							label="Y-Axis Label"
						/>
						<br></br>
						<Button
							className="createStatisticsButton"
							href="/recordStatistics"
							variant="contained"
							disableElevation
							onClick={this.createStatistic}
						>
							Create New Statistic
						</Button>
						<br></br>
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
