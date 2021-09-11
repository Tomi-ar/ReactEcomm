import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "../footer/Footer";
import NavBar from "../navBar/navBar";
import '../estilos.scss';
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
        console.log(newOrder);
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
        .catch((error) => console.log('error', error)); 
    }


    return(
        <div>
            <NavBar />
            <div className="container my-5">
                <div className="row ">
                    <div className="col-7">
                        <h3 className="cart-title">Mi carrito</h3>
                        <div className="product-item border">
                            {cartSize(items) > 0 ? (
                                items.map((prod) => ( 
                                <>
                                <div key={prod.id} className="border product-item-details mx-1 my-3">
                                    <div>
                                        <div className="row pt-2">
                                            <div className="col-1 offset-1 product-details__img text-center">
                                                <img src={prod.item.imagenURL} alt="foto del prod" className="ml-0 d-block" />
                                            </div>
                                            <div className="col-6">
                                                <h4>{prod.item.nombre}</h4>
                                                <p className="detail-subt">{prod.item.productor}</p>
                                            </div>
                                            <div className="col-2 offset-1 text-center">
                                                <button id="carrito" type="button" className="btn btn-light rounded-circle">
                                                    <img onClick={()=> removeItem(prod.item.id)} src="https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Simple-Icon.png" alt="eliminar" className="rounded-pill border border-dark" width="30"/>
                                                </button>
                                                <p className="remove-prod">Remover</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-2">
                                        <div className="col-8 botones">
                                            <p className="detail-subt">Unidades</p>
                                            <button onClick={() => onDecrease(prod.item.id)} type="button" className="btn btn-outline-secondary">-</button>
                                            <p>{prod.q}</p>
                                            <button onClick={() => onIncrease(prod.item.id)} type="button" className="btn btn-outline-secondary">+</button>
                                        </div>
                                        <div className="col-4 text-center">
                                            <p className="product-item__subtotal">Subtotal: ${prod.q*prod.item.precio}</p>
                                        </div>
                                    </div>
                                </div> 
                                </> ))
                            ) : (
                                <>
                                <div className="p-3">
                                    <Link to="/" className="volverInicio">No hay productos, comienza a comprar!</Link> 
                                </div>
                                </>
                            )}
                            {cartSize(items) > 0 ? (<>
                                <div className="row">
                                    <button className="col-6 offset-3 agregarMas"><Link className="boton_link" to="/" >Seguir comprando</Link></button>
                                    <button onClick={() => clearAll()} className="col-4 offset-4 btn vaciarCart">Vaciar carrito</button>
                                </div> 
                                </>) : (<> </>)
                            }
                        </div>               
                    </div>

                    <div className="col-4 offset-1 cart-summary">
                    <h3 className="cart-title">Resumen de compra</h3>
                        <div className="border">
                            <div className="cart-summary_style">
                                <p className="cart-summary_concept">Subtotal:</p>
                                <p className="cart-summary_value">${subtotal}</p>
                            </div>
                            <div className="cart-summary_style">
                                <p className="cart-summary_concept">Descuentos</p>
                                <p className="cart-summary_value">$0</p>
                            </div>
                            <div className="cart-summary_style">
                                <p className="cart-summary_concept">Total</p>
                                <p className="cart-summary_value">${total}</p>
                            </div>
                            <div className="my-3">
                                <button type="submit" className="col-6 offset-3 cart-summary_finish" onClick={handleFinishPurchase}>Terminar Compra</button>
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