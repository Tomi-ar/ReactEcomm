import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';
import '../estilos.scss';
import NavBar from '../navBar/navBar';
import Footer from '../footer/Footer';
import { getFirestore } from "../firebase";
// import ListProducts from './productos.json';


function ProductorList() {
    const {productor} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // const getItems = (ab) => {
    //     const selected = ListProducts.filter( (beer) => beer.productor === ab)
    //     setItems(selected);
    // }

    useEffect( () => {

        const db = getFirestore();
        const itemCollection = db.collection("Items");
        const crafter = itemCollection.where("productor", "==", productor);
    
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
        .catch((error) => console.log('error', error))
        .finally(() => setLoading(false));
    }, [productor]);
    
    return(
            <div>
                <NavBar />
                {loading && <h2>Loading...</h2>}
                <h1 className="titlePpal">Lista de productos de cervecería {productor}</h1>
                <div className="container altMin">
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