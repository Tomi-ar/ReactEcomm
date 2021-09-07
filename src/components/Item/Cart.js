import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "../footer/Footer";
import NavBar from "../navBar/navBar";
import '../estilos.css'
import { getFirestore } from "firebase/firestore";

const Cart = () => {
    const {items, removeItem, clearAll, cartSize, onIncrease, onDecrease} = useContext(CartContext);
    console.log('items', items);
    console.log('cantidad', cartSize(items))

    const subtotal = items.reduce((a,b) => a + b.item.precio*b.q, 0);
    const descuentos = 0;
    const total = subtotal - descuentos;

    // const history = useHistory();
    // const saveHistory = (id) => history.push(`/thankyou/${id}`);

    const handleFinishPurchase = (e) => {
        e.preventDefault();
        const newOrder = {
            buyer: {
                name: "Tomas",
                phone: "212315612",
                email: "tomas@tomas.com"
            },
            items: items.map(({item, q}) => ({
                item: {
                id: item.id,
                title: item.nombre,
                precio: item.precio,
            },
                q: q
            })),
            // date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        };
    //     const docRef = db.collection('items').doc(items.[0].item.id)
    //     orders.add(newOrder).then((resopnse) => {
    //         console.log(response);
    //         docRef.update({
    //            stock: items[0].item.stock - items[0].quantity; SE TENDRIA QUE HACER EN EL MOMENTO QUE SE CREA LA OTRA INFORMACION
    // })
    //     }).catch((error) => console.log(error)); 
    //     }
    // }
    //             LA OTRA FORMA        
        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();
        
        orders.add(newOrder).then((response) => {
            console.log(response);
            items.forEach(({item, q}) => {
            const docRef = db.collection('items').doc(item.id)
            batch.update(docRef, {stock: item.max - q})
            });
            batch.commit();
            // saveHistory(response.id)
        })
        // .then(clear())
        .catch((error) => console.log(error)); 
    }


    return(
        <div>
            <NavBar />
            <div className="container my-5">
                <div className="row ">
                    <div className="col-7">
                        <h3>Mi carrito</h3>
                        <div className="product-item border">
                            {cartSize(items) > 0 ? (
                                items.map((prod) => ( 
                                <>
                                <div key={prod.id} className="border rounded mx-1 my-3">
                                    <div className="product-item-details">
                                        <div className="row product-details-flex">
                                            <div className="col-1 offset-1 product-details__img">
                                                <img src={prod.item.imagenURL} alt="foto del prod" width="60" />
                                            </div>
                                            <div className="col-6 product-details__info">
                                                <h4>{prod.item.nombre}</h4>
                                                <p>{prod.item.productor}</p>
                                            </div>
                                            <div className="col-2 offset-2">
                                                <button id="carrito" type="button" class="btn btn-light carrito rounded-circle">
                                                    <img onClick={()=> removeItem(prod.item.id)} src="https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Simple-Icon.png" alt="eliminar" class="rounded-pill border border-dark carrito-img" width="30"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row product-item-control">
                                        <div className="col-8 product-item__qty botones">
                                            <p>Unidades</p>
                                            <button onClick={() => onDecrease(prod.item.id)} type="button" class="btn btn-outline-secondary">-</button>
                                            <p>{prod.q}</p>
                                            <button onClick={() => onIncrease(prod.item.id)} type="button" class="btn btn-outline-secondary">+</button>
                                        </div>
                                        <div className="col-4 product-item__total text-center">
                                            <p className="product-item__subtotal">Subtotal: ${prod.q*prod.item.precio}</p>
                                        </div>
                                    </div>
                                </div> 
                                </> ))
                            ) : (
                                <>
                                <div className="pt-3">
                                    <Link to="/" className="volverInicio">No hay productos, comienza a comprar!</Link> 
                                </div>
                                </>
                            )}
                            {cartSize(items) > 0 ? (<>
                                <div className="row">
                                    <button onClick={() => clearAll()} className="col-4 offset-4 btn btn-outline-secondary">Vaciar carrito</button>
                                </div> 
                                </>) : (<> </>)
                            }
                        </div>               
                    </div>

                    <div className="col-4 offset-1 cart-summary">
                    <h3>Resumen de compra</h3>
                        <div className="border">
                            <div className="border-bottom my-auto">
                                <p className="py-3">Subtotal:</p>
                                <p>${subtotal}</p>
                            </div>
                            <div className="border-bottom my-auto">
                                <p className="py-3">Descuentos</p>
                                <p>$0</p>
                            </div>
                            <div className="border-bottom my-auto">
                                <p className="py-3">Total</p>
                                <p>${total}</p>
                            </div>
                            <div className="botones my-3">
                                <button type="submit" to="/thankyou" onClick={handleFinishPurchase}>Terminar Compra</button>
                                <Link to="/" >Seguir comprando</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart