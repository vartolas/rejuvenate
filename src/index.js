import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//views 
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import Register from './views/Register';
import PasswordReset from './views/Password Reset';
import TopNavbar from './react-components/TopNavbar';
import AddFriend from './views/AddFriend';
import RecordStatistics from './views/RecordStatistics';
import Statistics from './views/Statistics';
import Setting from './views/Setting';

class App extends React.Component{
    render(){
        return (
                <>
                <TopNavbar/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/"  component={Login}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/password reset" component={PasswordReset}/>
                        <Route exact path="/addFriend" component={AddFriend}/>
                        <Route exact path="/recordStatistics" component={RecordStatistics}/>
                        <Route exact path="/statistics" component={Statistics}/>
                        <Route exact path="/setting" component={Setting}/>
                    </Switch>
                </BrowserRouter>
                </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

