import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//views 
import Login from './views/Login';
import Register from './views/Register';
import PasswordReset from './views/Password Reset';
import AdminLogin from './views/Admin Login';
import AdminRegister from './views/Admin Register';
import Home from './views/Home';
import Profile from './views/Profile';

class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/password reset" component={PasswordReset} />
                    <Route exact path="/admin" component={AdminLogin} />
                    <Route exact path="/admin register" component={AdminRegister} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

