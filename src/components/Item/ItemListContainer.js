import React from 'react';
import ItemList from './ItemList';
import '../estilos.css';

function ItemListContainer() {
    return(
            <div >
                <h1 className="tituloPpal">Lista de productos con Reactjs</h1>
                <div className="contenedor">
                <ItemList/>
                </div>
            </div>
    );
}

export default ItemListContainer;