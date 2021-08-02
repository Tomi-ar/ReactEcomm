import React from 'react';
import { Nav , Navbar, Container } from 'react-bootstrap';

export const NavBar = () => {
    return ( <div>
                 <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="../images/Logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                            />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Nuestros Planes</Nav.Link>
                        <Nav.Link href="#features">Concepto BB</Nav.Link>
                        <Nav.Link href="#pricing">Estilos</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div> 
        );
};

export default NavBar;