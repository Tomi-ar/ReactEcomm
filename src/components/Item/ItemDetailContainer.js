import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function render(item) {
    return(
        <ItemDetail
        key={item.id}
        id={item.id}
        nombre={item.nombre}
        tipo={item.tipo}
        productor={item.productor}
        precio={item.precio}
        imagenURL={item.imagenURL}
        max={item.max}
        cantidad={item.cantidad}/>
        )
}

function ItemDetailContainer() {
    const [items, setItems] = useState({});

    const getItems = () => {
        setItems({
            id: 2,
            nombre: "Kuné",
            tipo: "Pale Ale",
            productor: "Patagonia",
            precio: 200,
            imagenURL: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            max: 10,
            cantidad: 1,
           });
    }

    useEffect( () => {
        setTimeout( () => {
            getItems();
            render(items)
        }, 3000)
        }, [] 
    );


    return (
        <div>
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
