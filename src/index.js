import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route , Redirect} from "react-router-dom";
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

class App extends React.Component {
	constructor(props){
		super(props);
		//keep global state in App component's state object, pass down App obj to children
		this.state = {
			user: null
		}
	}

	render() {
		//page still fetching the user, return loading screen for now
		if (!this.state.user){
			return (
				<h1>loading</h1>
			);
		}
		console.log(`Logged in as user ${this.state.user._id}`);
		return (
			<>
				<TopNavbar app={this}/>
				<BrowserRouter>
					<Switch>
						<Route exact path="/home" render={() => (<Home app={this}/>)}/> 

						<Route exact path="/admin home"  render={() => (<AdminHome app={this}/>)} />

						<Route exact path="/admin dashboard" render={() => (<AdminDashboard app={this}/>)} />

						<Route exact path="/userProfile" render={() => (<EditableProfile app={this}/>)} />

						<Route exact path="/otherUserProfile" render={() => (<ViewableProfile app={this}/>)} />

						<Route exact path="/password reset" render={() => (<PasswordReset app={this}/>)} />

						<Route exact path="/statistics" render={() => (<Statistics app={this}/>)} />

						<Route exact path="/statistics/create" render={() => (<CreateStatistics app={this}/>)} />

						<Route exact path="/statistics/record" render={() => (<RecordStatistics app={this}/>)} />
						
						<Route exact path="/settings" render={() => (<Settings app={this}/>)} />
					</Switch>
				</BrowserRouter>
			</>
		);
	}

	componentDidMount(){
		fetch(`/api/users/currentuser`)
			.then(res => res.json())
			.then(json => this.setState({user: json}));
	}

}

class AppLoginWrapper extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/"  render={()=> (<Redirect to="/login"/>)}/>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/password reset" component={PasswordReset} />
					<Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<AppLoginWrapper />, document.getElementById("root"));
