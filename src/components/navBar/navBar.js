import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { Button, Container, Nav , Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../images/Logo.png'
import Carrito from '../images/Carrito.svg';
import "../estilos.css"
import CartWidget from '../Item/CartWidget';


export const NavBar = () => {
    return ( <div>
                 <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className="estiloLogo" href="#home">
                            <NavLink to="/" activeClassName="activeRoute">
                                <img
                                src={Logo}
                                width="100"
                                className="d-inline-block align-top"
                                alt=""
                            /></NavLink>
                        </Navbar.Brand>
                        <Nav>
                        <NavDropdown title="Productores" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1" >
                                <NavLink className="navLinks estilos" activeClassName="activeRoute" to="/Patagonia">Patagonia</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">
                                <NavLink className="navLinks estilos" activeClassName="activeRoute" to="/Colorado">Colorado</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">
                                <NavLink className="navLinks estilos" activeClassName="activeRoute" to="/Antares">Antares</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="navLinks" href="FAQ">
                            <NavLink className="navLinks route" activeClassName="activeRoute" to="/FAQ">FAQ</NavLink>
                        </Nav.Link>
                        </Nav>
                        <Link to="/cart">
                            <Button className="estiloCarrito" variant="link">
                                        <img 
                                            src={Carrito} 
                                            alt="carrito" 
                                            width="60"
                                            height="60"
                                            className="border-dark carrito-img"
                                        />
                            </Button>
                            <CartWidget />          
                        </Link>
                    </Container>
                </Navbar>
            </div> 
        );
};

export default NavBar;