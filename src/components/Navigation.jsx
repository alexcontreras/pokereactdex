import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="/">PokeReactDex</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/pokemon">Pokémon</Nav.Link>
                    <Nav.Link href="/items">Items</Nav.Link>
                    <Nav.Link href="/moves">Moves</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
