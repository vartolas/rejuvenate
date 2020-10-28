import React from 'react';
import './styles.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
// import Home from '../../views/Home';
import Profile from '../../views/Profile';
import Setting from '../../views/Setting';
import AddFriend from '../../views/AddFriend';
import RecordStatistics from '../../views/RecordStatistics';
import Statistics from '../../views/Statistics';

export default class TopNavbar extends React.Component {
    render(){
        return (
            <div className="topRow">
                    <BrowserRouter>
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            {/* <Navbar.Brand href="/home">Fitness App</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navContent">
                                    <Nav.Link href="/profile">Profile</Nav.Link>
                                    <Nav.Link href="/addFriend">Add Friend</Nav.Link>
                                    <NavDropdown title="Stats" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/recordStatistics">Record Stats</NavDropdown.Item>
                                        <NavDropdown.Item href="/statistics">View Stats</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/setting">Setting</Nav.Link>
                                    <Nav.Link href="/">Sign Out</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <br />
                        <Switch>
                            <Route exact path="/">
                            </Route>
                            {/* <Route path="/home">
                                <Home/>
                            </Route> */}
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route path="/addFriend">
                                <AddFriend />
                            </Route>
                            <Route path="/recordStatistics">
                                <RecordStatistics />
                            </Route>
                            <Route path="/statistics">
                                <Statistics />
                            </Route>
                            <Route path="/setting">
                                <Setting />
                            </Route>
                        </Switch>
                    </BrowserRouter>
            </div>
        );
    }
}