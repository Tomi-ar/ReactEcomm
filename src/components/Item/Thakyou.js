import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../navBar/navBar";
import '../estilos.scss'

export const Thankyou = () => {

    const { id } = useParams();


    return(
        <>
            <NavBar />
            <div className="altMin text-center">
                <h1 className="titlePpal mt-3">Muchas gracias por tu compra!</h1>
                <p className="mt-5">Tu código de compra es el siguiente: <span>{id}.</span></p>
                <p>Úsalo para rastrear tu pedido!</p>
                <button className="col-6 volverHome mt-5"><Link className="boton_link" to="/" >Volver al Home</Link></button>
            </div>
            <Footer />
        </>
    )
}