import { React, useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ListProducts from './productos.json'


function ItemList () {

    const [items, setItems] = useState([]);
    
    useEffect(
        () => {
        setTimeout(async () => {
            setItems(ListProducts);
        }, 2000);
        },
    );

    return (
        <>
            {items.map(producto => {
                const { id, nombre, tipo, productor, precio, imagenURL, max, cantidad } = producto;
                return (
                <ItemCard
                    key={id}
                    id={id}
                    nombre={nombre}
                    tipo={tipo}
                    productor={productor}
                    precio={precio}
                    imagenURL={imagenURL}
                    max={max}
                    cantidad={cantidad}/>
                    );
            })};
        </>
    );
}
export default ItemList;