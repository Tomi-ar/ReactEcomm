import './App.css';
import React from 'react';
import {NavBar} from './components/navBar/navBar';
import ItemCard from './components/ItemCard/ItemCard';
import ItemCount from './components/ItemCard/ItemCount'

function App(){
    return(
        <div>
            <NavBar/>
            <ItemCard nombre="IPA"/>
            <ItemCount max={6} cantidad={1} />
        </div>
    );
}

export default App;