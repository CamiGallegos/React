import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <div className="nav-wrapper">
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                className="navbar-custom py-3 navbar-elevated"
            >
                <Container className="position-relative">
                    <Navbar.Brand as={Link} to="/" className="mx-auto text-center brand-container">
                        <h1 className="brand-title mb-0">CAYETANO</h1>
                        <div className="brand-line"></div>
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="custom-toggler"
                    />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link
                                as={Link}
                                to="/"
                                className="nav-link-custom mx-2"
                            >
                                Inicio
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/productos"
                                className="nav-link-custom mx-2"
                            >
                                Productos
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/preguntas"
                                className="nav-link-custom mx-2"
                            >
                                Preguntas
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/cambios"
                                className="nav-link-custom mx-2"
                            >
                                Cambios
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/contacto"
                                className="nav-link-custom mx-2"
                            >
                                Contacto
                            </Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};