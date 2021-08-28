import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../estilos.css'

const CartWidget = () => {
    const { cartSize } = useContext(CartContext);

    return (
        <>
        <span className="cartWidget">{cartSize()}</span>
        </>
    )
}
export default CartWidget;
