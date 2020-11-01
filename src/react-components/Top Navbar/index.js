import React from 'react';
import './styles.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

export default class TopNavbar extends React.Component {
    render(){
        return (
            <div className="topRow">
                    <BrowserRouter>
                        <Navbar className="Navbar" bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="/home">
                                    Fitness App
                            </Navbar.Brand>
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
                    </BrowserRouter>
            </div>
        );
    }
}