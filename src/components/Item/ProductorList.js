import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';
import '../estilos.css';
import NavBar from '../navBar/navBar';
import Footer from '../footer/Footer';
import { getFirestore } from "../firebase";
// import ListProducts from './productos.json';


function ProductorList() {
    const {productor} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const db = getFirestore();
    const itemCollection = db.collection("Items");
    const crafter = itemCollection.where("productor", "==", productor);

    // const getItems = (ab) => {
    //     const selected = ListProducts.filter( (beer) => beer.productor === ab)
    //     setItems(selected);
    // }

    useEffect( () => {
            // getItems(productor);
        setLoading(true);
        crafter.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No items");
            }
            setItems(
                querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
        })
        // .then(() => setLoading(false))
        .catch((error) => console.log('error', error))
        .finally(() => setLoading(false));
    }, [crafter]);
    
    return(
            <div>
                <NavBar />
                <h1 className="tituloPpal">Lista de productos de cervecería {productor}</h1>
                <div className="container">
                    <div className="row">
                        <> 
                        {items.map((item) => (
                            <ItemCard
                                key={item.id}
                                id={item.id}
                                nombre={item.nombre}
                                tipo={item.tipo}
                                productor={item.productor}
                                precio={item.precio}
                                imagenURL={item.imagenURL}
                                max={item.max}
                                cantidad={item.cantidadMin}/>
                                )
                        )}
                        </>
                    </div>
                </div>
                <Footer />
            </div>
    );
}

export default ProductorList;