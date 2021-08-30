// import { getFirestore } from '../firebase';
import { React, useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ListProducts from './productos.json'
// import { QuerySnapshot } from 'firebase/firestore';

//puede definir el itemId aqui de ejemplo, usarlo desde useparams
// const itemID = '1234'


function ItemList () {

    const [items, setItems] = useState([]);
    // const [item, setItem] = useState(null);
    // const [itemHighPrice, setItemHighPrice] = useState([]);
    const [loading, setLoading] = useState(true)
    // console.log('items', items)

    // const highPrice = itemCollection.where("price", ">", 1234)
    //highprice puede ser qqlr cosa, tipo catId

    useEffect(
        () => {
        setTimeout(async () => {
            setItems(ListProducts);
            setLoading(false)
        }, 2000);
        },
    );

    // useEffect(() => {
    //     setLoading(true);
    //     const db = getFirestore();
    //     const itemCollection = db.itemCollection("items");
    //     const currentItem = itemCollection.doc(itemId)
    //     // ese itemId en la parte de productDetail se llama solo ID

    //     // LLAMADO A LA COLECCION
    //     itemCollection
    //     .get()
    //     .then(QuerySnapshot => {
    //         if (QuerySnapshot.size === 0) {
    //             console.log("No items");
    //         }
    //         setItems(QuerySnapshot.dos.map(doc => ({
    //             id: doc.id,
    //             ...doc.data(),
    //             }))
    //         );
    //     })
    //     .catch((error) => console.log(error))
    //     .finally(() => setLoading(false));

    //     //LLAMADO A UN ITEM
    //     currentItem.get().then(doc => {
    //         if(!doc.exists) {
    //             console.log("No items");
    //             return
    //         }
    //         setItems({id: doc.id, ...doc.data() })
    //     })

    //     //LLAMADO CON UN FILTRO
    //     highPrice.get()
    //     .then((QuerySnapshot) =>
    //         setItemHighPrice(
    //             QuerySnapshot.docs.map((doc) => doc.data())
    //         )
    //     )
    //     .catch((error) => console.log('error', error));
    // }, [])

    return (
        <>
        {loading && <h2>Loading...</h2>}
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