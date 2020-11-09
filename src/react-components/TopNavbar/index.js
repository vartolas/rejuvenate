import React from 'react';
import './styles.css';
import {BrowserRouter} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import SearchBar from '../../react-components/SearchBar';

export default class TopNavbar extends React.Component {
    render(){
        return (
            <div className="topRow">
                <BrowserRouter>
                    <Navbar className="Navbar" bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="/home">Rejuvenate</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBar />
                        <Nav className="navContent">
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <NavDropdown title="Statistics" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/recordStatistics">Record Statistics</NavDropdown.Item>
                                <NavDropdown.Item href="/statistics">View Statistics</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/settings">Settings</Nav.Link>
                            <Nav.Link href="/">Sign Out</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </BrowserRouter>
            </div>
        );
    }
}
