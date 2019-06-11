import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class TopNavbar extends React.Component {
    render() {
        return ( 
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Jonathan Lee</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/aboutme">About Me</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopNavbar;