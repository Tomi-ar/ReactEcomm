import React from 'react';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/Item/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

function App(){
    return(
        <div>
            <NavBar/>
            <ItemDetailContainer />
            <ItemListContainer />
        </div>
    );
}

export default App;