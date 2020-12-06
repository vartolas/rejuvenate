import React from "react";
import { Button } from "react-bootstrap";
import { StatChart } from "../Statistics";
import LoadingDisplay from "../../react-components/LoadingDisplay";
import "./styles.css";

const HOST_URL = process.env.HOST_URL || "http://localhost:5000";

export default class RecordStatistics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stat: null
		};
		this.numPointIDs = 0;
		this.statID = new URLSearchParams(window.location.search).get('id');
	}

	getNewPointID = () => "point".concat(++this.numPointIDs);

	componentDidMount() {
		fetch(`${HOST_URL}/api/statistics/${this.statID}`)
			.then(res => res.json())
			.then(stat => {
				this.setState({stat: stat});
			})
	}

	addPoint = (e) => {
		e.preventDefault();
		var x = parseInt(document.getElementById("newXEntryInput").value);
		var y = parseFloat(document.getElementById("newYEntryInput").value);

		if (this.state.stat.data.find((point) => point.x === x)) {
			alert("This data point already exists.");
			return;
		}

		if (!isNaN(x) && !isNaN(y)) {
			var newStat = this.state.stat;
			newStat.data.push({ x: x, y: y });
			newStat.data.sort((point1, point2) => point1.x - point2.x);
			this.setState({ stat: newStat });
		} else {
			alert("This data point is invalid.");
		}
	};

	removePoint = (index, e) => {
		return function (e) {
			let statToKeep = this.state.stat;
			statToKeep.data.splice(index, 1);
			this.setState({ stat: statToKeep });	
		}
	}

	saveStatisticsChanges = (e) => {
		fetch(`${HOST_URL}/api/statistics/${this.statID}`, {
			method: 'PATCH',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: this.state.stat.data
			})
		})
		.then(res => res.json())
		.then(updatedStat => {
			this.setState({ stat: updatedStat });
		});
	};

	render() {
		if (!this.state.stat) {
			return <LoadingDisplay/>;
		}

		this.numPointIDs = 0;
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
										<td>
											<span id="xAxesLabel">{this.state.stat.xAxis}</span>
										</td>
										<td>
											<input id="newXEntryInput" type="text"></input>
										</td>
									</tr>
									<tr>
										<td>
											<span id="yAxesLabel">{this.state.stat.yAxis}</span>
										</td>
										<td>
											<input id="newYEntryInput" type="text"></input>
										</td>
									</tr>
								</tbody>
							</table>
							<Button id="newEntryButton" onClick={this.addPoint}>
								Add New Entry
							</Button>
						</form>
					</div>
					<div id="statChartDisplayContainer">
						<StatChart id="statChartDisplay" stat={this.state.stat} />
					</div>
				</div>

				<div id="editEntriesSectionContainer">
					<h2>Existing Entries</h2>
					<div id="editExistingStatContainer">
						<div id="labelsContainer">
							<span id="xAxesLabel">{this.state.stat.xAxis}</span>
							<span id="XAxesLabel">{this.state.stat.yAxis}</span>
						</div>
						<div id="editExistingStatScroll">
							{this.state.stat.data.map((point, index) => {
								var pointID = this.getNewPointID();
								return (
									<div
										id={pointID}
										key={pointID}
										className="recordStatFormContainer"
									>
										<form className="pointForm">
											<label>{point.x}</label>
											<label>{point.y}</label>
										</form>
										<button onClick={this.removePoint(index)}>
											x
										</button>
									</div>
								);
							})}
						</div>
					</div>
					<Button
						id="confirmAllChangesButton"
						href="/statistics"
						onClick={this.saveStatisticsChanges}
					>
						Confirm All Changes
					</Button>
				</div>
			</div>
		);
	}
}
