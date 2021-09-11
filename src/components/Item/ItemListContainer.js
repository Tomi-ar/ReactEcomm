import React from 'react';
import ItemList from './ItemList';
import '../estilos.scss';

function ItemListContainer() {
    return(
            <div>
                <h1 className="titlePpal">Lista de productos con Reactjs</h1>
                <div className="container altMin">
                    <div className="row">
                        <ItemList />
                    </div>
                </div>
            </div>
    )
}

export default ItemListContainer;