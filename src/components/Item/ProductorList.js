import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';
import ListProducts from './productos.json';
import '../estilos.css';
import NavBar from '../navBar/navBar';


function ProductorList() {
    const {productor} = useParams();

    const [items, setItems] = useState([]);
    const getItems = (ab) => {
        const selected = ListProducts.filter( (beer) => beer.productor === ab)
        setItems(selected);
    }

    useEffect( () => {
            getItems(productor);
        }
    )
    
    return(
            <div>
                <NavBar />
                <h1 className="tituloPpal">Lista de productos de {productor}</h1>
                <div className="container">
                    <div className="row">
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
                    </div>
                </div>
            </div>
    );
}

export default ProductorList;