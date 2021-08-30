import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../estilos.css'

const CartWidget = () => {
    const { cartSize } = useContext(CartContext);
    console.log('cartSize', cartSize());

    return (
        <>
        {cartSize() > 0 ? (<span className="cartWidget">{cartSize()}</span>) : ('')}
        </>
    )
}
export default CartWidget;
