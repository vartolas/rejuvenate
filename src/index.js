import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//views 
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import Register from './views/Register';
import PasswordReset from './views/Password Reset';
import Statistics from './views/Statistics';
import CreateStatistic from './views/CreateStatistic';

import './index.css';

class App extends React.Component{
    render(){
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/"  component={Login}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/password reset" component={PasswordReset}/>
                        <Route exact path="/statistics" component={Statistics}/>
                        <Route exact path="/statistics/create" component={CreateStatistic}/>
                    </Switch>
                </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

