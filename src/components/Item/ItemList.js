import { React, useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const Productos = [{
    id: 1,
    nombre: "Kilometro 24.7",
    tipo: "Session IPA",
    productor: "Patagonia",
    precio: 150,
    imagenURL: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    max: 10,
    cantidad: 1,
},
{
    id: 2,
    nombre: "Kuné",
    tipo: "Pale Ale",
    productor: "Patagonia",
    precio: 200,
    imagenURL: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    max: 10,
    cantidad: 1,
},
{
    id: 3,
    nombre: "Riberão Lager",
    tipo: "Lager",
    productor: "Colorado",
    precio: 310,
    imagenURL: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    max: 10,
    cantidad: 1,
},
{
    id: 4,
    nombre: "Eugenia",
    tipo: "Session IPA",
    productor: "Colorado",
    precio: 285,
    imagenURL: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    max: 10,
    cantidad: 1,
}
]

function ItemList () {

    const [items, setItems] = useState([]);
    
    useEffect(
        () => {
        setTimeout(async () => {
            setItems(Productos);
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