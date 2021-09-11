import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../estilos.scss'

const CartWidget = () => {
    const { cartSize } = useContext(CartContext);

    return (
        <>
        {cartSize() > 0 ? (<span className="cartWidget">{cartSize()}</span>) : ('')}
        </>
    )
}
export default CartWidget;
