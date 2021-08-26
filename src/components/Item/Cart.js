import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import NavBar from "../navBar/navBar";

const Cart = () => {
    const cart = useContext(CartContext);
    console.log('cart', cart)

    return(
        <div>
            <NavBar />
            <h3>Acá iria el detalle del carrito</h3>
        </div>
    );
}

export default Cart