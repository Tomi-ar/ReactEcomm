import React, { useEffect } from "react"
import { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const inCart = (id) => items.find(item => item.id === id) !== undefined;

    const addItem = (item, q) => {
        if (inCart(item.id)) {
            setItems(
                items.map((i) => {
                    if (i.item.id === item.id) i.q = i.q + q;
                    return i;
                  })
            );
        } else {
            setItems([...items, { item, q }]);
        }
    }

    const removeItem = (id) => {
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)
    }

    const clearAll = () => setItems([])

    useEffect(() => {
        console.log('cart', items)
    }, [items])

    return (
        <CartContext.Provider value={{items, inCart, addItem, removeItem, clearAll}}>
            {children}
        </CartContext.Provider>    
    );
}
export default CartProvider;