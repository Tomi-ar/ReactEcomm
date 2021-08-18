import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../navBar/navBar';
import ItemDetail from './ItemDetail';
import ListProducts from './productos.json'


function ItemDetailContainer() {
    const {id} = useParams();

    const [items, setItems] = useState({});

    const getItems = (ab) => {
        const selected = ListProducts.find( (producto) => producto.id === ab)
        setItems(selected);
    }

    useEffect( () => {
            getItems(id);
        }
    )

    return (
        <div>
            <NavBar />
            <h1 className="tituloPpal">Detalle de producto</h1>
            <div className="contenedor">
            <ItemDetail 
                key={items.id}
                id={items.id}
                nombre={items.nombre}
                tipo={items.tipo}
                productor={items.productor}
                precio={items.precio}
                imagenURL={items.imagenURL}
                max={items.max}
                cantidad={items.cantidad}/>
            </div>
        </div>
    );
}


export default ItemDetailContainer;
