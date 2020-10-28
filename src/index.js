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
                    </Switch>
                </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

