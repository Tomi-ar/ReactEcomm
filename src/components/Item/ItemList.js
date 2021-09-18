import { getFirestore } from '../firebase';
import { React, useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function ItemList (){

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)
    console.log('items', items)

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("Items");

        itemCollection
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("No items");
            }
            setItems(querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                }))
            );
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, []);

    return (
        <>
        {loading && <h2>Loading...</h2>}
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
    )
}

export default ItemList;