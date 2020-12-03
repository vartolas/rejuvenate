import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBar from "../../react-components/SearchBar";

const HOST_URL = process.env.HOST_URL || "http://localhost:5000"

export default class TopNavbar extends React.Component {

	logout = () => {
		fetch(`${HOST_URL}/api/logout`, {
			method: 'post'
		});
		this.props.history.push("/login");
	}

	render() {
		return (
			<div className="topRow">
				<BrowserRouter>
					<Navbar className="Navbar" expand="lg" sticky="top">
						<Navbar.Brand href="/home" id="title">
							Rejuvenate
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<SearchBar />
							<Nav className="navContent">
								<Nav.Link id="option" href="/userProfile">
									Profile
								</Nav.Link>
								<NavDropdown title="Statistics" id="option">
									<NavDropdown.Item href="/recordStatistics">
										Record Statistics
									</NavDropdown.Item>
									<NavDropdown.Item href="/statistics">
										View Statistics
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link id="option" href="/settings">
									Settings
								</Nav.Link>
								<Nav.Link onClick={this.logout} id="option" href="/login">
									Sign Out
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</BrowserRouter>
			</div>
		);
	}
}
