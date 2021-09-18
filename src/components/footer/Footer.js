import React from 'react';
import Logo from '../images/Logo.png';
import Face from '../images/facebook.PNG';
import Insta from '../images/instagram.png';
import Tw from '../images/twitter.PNG';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer" className="container-fluid bg-secondary text-white">
            <div className="row text-center my-auto">
                <div className="col-12 col-sm-4 my-auto mx-auto">
                    <p className="mb-1">Seguinos en las redes:</p>
                    <div className="d-inline-block d-sm-block d-md-inline-block px-md-2 pb-2 redes">
                        <a href="https://www.facebook.com"><img src={Face} alt="Icono de facebook" /></a>
                    </div>
                    <div className="d-inline-block d-sm-block d-md-inline-block px-1 px-md-2 pb-2 redes">
                        <a href="https://www.instagram.com/"><img src={Insta} alt="Icono de instagram" /></a>
                    </div>
                    <div className="d-inline-block d-sm-block d-md-inline-block px-md-2 pb-2 redes">
                        <a href="https://twitter.com/?lang=es"><img src={Tw} alt="Icono de twitter" /></a>
                    </div>
                </div>
                <div className="col-12 col-sm-4 my-3 my-sm-auto mx-auto">
                    <ul className="my-auto">
                        <li><Link to="/">Volver al inicio</Link></li>
                        <li><Link to="/FAQ">Términos y condiciones</Link></li>
                        <li><Link to="/FAQ">Uso de cookies y política de privacidad</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4 my-auto logo mx-auto">
                    <Link to="/">
                        <img src={Logo} width="120" alt="Logo compañía" className="rounded-pill border border-white" loading="lazy" />
                    </Link>
                </div>
            </div>
            <hr />
            <div className="row text-center mt-1 pb-1">
                <ul className="mx-auto my-auto">
                    <li>Buenas Birras © Copyright 2021 | Todos los derechos reservados | By Tomi Arrillaga.</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;