import React from "react";
import "./NavBar.scss";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" className="navBar_Brand">
                Yusa Zhang
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto navBar_items">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
