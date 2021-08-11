import React from 'react';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/Item/ItemListContainer';
import './App.css';

function App(){
    return(
        <div>
            <NavBar/>
            <ItemListContainer />
        </div>
    );
}

export default App;