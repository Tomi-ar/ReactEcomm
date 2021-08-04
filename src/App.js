import './App.css';
import React from 'react';
import {NavBar} from './components/navBar/navBar';
import Item from './components/ItemCard/Items';

function App(){
    return(
        <div>
            <NavBar/>
            <Item nombre="IPA"/>
            <Item nombre="Session IPA"/>
        </div>
    );
}

export default App;