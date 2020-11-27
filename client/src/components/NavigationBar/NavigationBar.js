import React from "react";
import "./NavigationBar.css";
import { Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/"><h3>Googly BookWorm</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;