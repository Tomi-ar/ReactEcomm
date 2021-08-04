import React from 'react';
import { Nav , Navbar, Container, Button } from 'react-bootstrap';
import Logo from '../images/Logo.png'
import Carrito from '../images/Carrito.svg'

const estiloLogo = {
    background: '#fff'
};

const estiloCarrito = {
    background: '#fff',
    borderRadius: '50%',
}

export const NavBar = () => {
    return ( <div>
                 <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand style={estiloLogo} href="#home">
                            <img
                                src={Logo}
                                width="100"
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
                        <Button style={estiloCarrito} variant="link">
                        <img 
                            src={Carrito} 
                            alt="carrito" 
                            width="60"
                            height="60"
                            className="border-dark carrito-img"
                        />
                        </Button>
                    </Container>
                </Navbar>
            </div> 
        );
};

export default NavBar;