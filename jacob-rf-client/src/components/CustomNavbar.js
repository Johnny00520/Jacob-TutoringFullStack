import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        
                        <NavDropdown eventKey={2} title="About" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} componentClass={Link} href="/about/profolio" to="/about/profolio">Jacob teacher</MenuItem>
                            <MenuItem disabled eventKey={2.2} componentClass={Link} href="/about/learningEng" to="/about/learningEng">Learning English</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3} componentClass={Link} href="/about/testimonials" to="/about/testimonials" >Testimonials</MenuItem>
                        </NavDropdown>

                        <NavItem eventKey={3} componentClass={Link} href="/services" to="/services">
                            Services
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/resources" to="/resources">
                            Resources
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/contact" to="/contact">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}