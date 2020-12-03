import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//views
import Login from "./views/Login";
import Register from "./views/Register";
import PasswordReset from "./views/PasswordReset";

import Home from "./views/Home";
import AdminHome from "./views/AdminHome";
import AdminDashboard from "./views/AdminDashboard";
import EditableProfile from "./views/EditableProfile";
import ViewableProfile from "./views/ViewableProfile";
import Statistics from "./views/Statistics";
import CreateStatistics from "./views/CreateStatistic";
import RecordStatistics from "./views/RecordStatistics";
import Settings from "./views/Settings";

import TopNavbar from "./react-components/TopNavbar";

import "./index.css";

const HOST_URL = "http://localhost:5000"

class App extends React.Component {
	constructor(){
		//keep global state in App component's state object, pass down App obj to children
		this.state = {
			user: null
		}
	}
	render() {
		if (!this.state.user){
			//make api to grab current user
			// fetch(`${HOST_URL}/api/users/currentuser`).then(response => {
			// 	this.setState({user: response.json()})
			// })
		}
		
		return (
			<>
				<TopNavbar app={this}/>
				<BrowserRouter>
					<Switch>
						<Route exact path="/home" render={() => (<Home app={this}/>)}/> 
						<Route exact path="/admin home" component={AdminHome} />
						<Route exact path="/admin dashboard" component={AdminDashboard} />
						<Route exact path="/userProfile" component={EditableProfile} />
						<Route exact path="/otherUserProfile" component={ViewableProfile} />
						<Route exact path="/password reset" component={PasswordReset} />
						<Route
							exact
							path="/recordStatistics"
							component={RecordStatistics}
						/>
						<Route
							exact
							path="/statistics/create"
							component={CreateStatistics}
						/>
						<Route exact path="/statistics" component={Statistics} />
						<Route
							exact
							path="/statistics/create"
							component={CreateStatistics}
						/>
						<Route
							exact
							path="/recordStatistics"
							component={RecordStatistics}
						/>
						<Route exact path="/settings" component={Settings} />
					</Switch>
				</BrowserRouter>
			</>
		);
	}
}

class AppLoginWrapper extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/register" component={Register} />
					<Route exact path="/password reset" component={PasswordReset} />
					<Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<AppLoginWrapper />, document.getElementById("root"));
