import React from 'react'
import { Router } from './router/Router'
import './App.css'
import CartProvider from './components/context/CartContext';

function App(){

    return(
        <div>
            <CartProvider>
                <Router />
            </CartProvider>
        </div>
    );
}

export default App;