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
			stat: null,
			successfullyUpdated: null
		};
		this.num_point_ids = 0;
		this.statid = new URLSearchParams(window.location.search).get('id');
	}

	new_point_id = () => "point".concat(++this.num_point_ids);

	componentDidMount(){
		fetch(`${HOST_URL}/api/statistics/${this.statid}`)
			.then(res => res.json())
			.then(stat =>{
				this.setState({stat: stat});
			})
	}

	render() {
		if(!this.state.stat){
			return (
				<LoadingDisplay/>
			);
		}

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
										<td>
											<span id="xAxesLabel">{this.state.stat.xAxis}</span>{" "}
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

							<Button id="newEntryButton" onClick={this.handleNewEntry}>
								Add New Entry
							</Button>
						</form>
					</div>
					<div id="statChartDisplayContainer">
						<StatChart id="statChartDisplay" stat={this.state.stat} />
					</div>
				</div>
				<div id="editEntriesSectionContainer">
					<h2>Exisiting Entries</h2>
					<div id="editExistingStatContainer">
						<div id="labelsContainer">
							<span id="xAxesLabel">{this.state.stat.xAxis}</span>
							<span id="XAxesLabel">{this.state.stat.yAxis}</span>
						</div>
						<div id="editExistingStatScroll">
							{this.state.stat.data.map((point, index) => {
								var point_id = this.new_point_id();
								return (
									<div
										id={point_id}
										key={point_id}
										className="recordStatFormContainer"
									>
										<form className="pointForm">
											<label>{point.x}</label>
											<label>{point.y}</label>
										</form>
										<button onClick={this.deletePoint(index).bind(this)}>
											-
										</button>
									</div>
								);
							})}
						</div>
					</div>
					<Button
						id="confirmAllChangesButton"
						onClick={this.handleConfirmAllChanges}
					>
						Confirm All Changes
					</Button>
					
				</div>
			</div>
		);
	}

	handleConfirmAllChanges = (e) => {
		fetch(`${HOST_URL}/api/statistics/${this.statid}`, {
			method: 'PATCH',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				data: this.state.stat.data
			})
		})
		.then(res => res.json())
		.then(updatedstat => {
			this.setState({stat: updatedstat})
		});
	};

	handleNewEntry = (e) => {
		e.preventDefault();
		var x = parseInt(document.getElementById("newXEntryInput").value);
		var y = parseFloat(document.getElementById("newYEntryInput").value);

		if (this.state.stat.data.find((point) => point.x === x)) {
			alert("value has already been entered");
			return;
		}

		if (!isNaN(x) && !isNaN(y)) {
			var new_stat = this.state.stat;
			new_stat.data.push({ x: x, y: y });
			new_stat.data.sort((point1, point2) => point1.x - point2.x);
			this.setState({ stat: new_stat });
		} else {
			alert("invaid entries");
		}
	};

	deletePoint(index, e) {
		return function (e) {
			var new_stat = this.state.stat;
			new_stat.data.splice(index, 1);
			this.setState({ stat: new_stat });
		};
	}
}
