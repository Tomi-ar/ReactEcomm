import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "../footer/Footer";
import NavBar from "../navBar/navBar";
import '../estilos.scss';
import Swal from "sweetalert2";
import CurrencyFormat from "react-currency-format";


const Cart = () => {
    const {items, removeItem, clearAll, cartSize, onIncrease, onDecrease} = useContext(CartContext);
    const subtotal = items.reduce((a,b) => a + b.item.precio*b.q, 0);
    const descuentos = items.filter(({q}) => q >= 6).reduce((a, b) => a + b.item.precio*0.15*b.q, 0);
    const total = subtotal - descuentos;
    
    console.log('items', items);
    console.log('cantidad', cartSize(items))
    console.log('descuento', descuentos);

    const VaciarCarrito = () =>{
        Swal.fire({
            title: "Atención! Esta acción eliminará todos los productos de tu carrito",
            text: "Si aceptas, eliminarás todos los productos",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            dangerMode: true,
            confirmButtonText: "Si, vaciar!"
        })
        .then((borrarTodo) => {
            if (borrarTodo.isConfirmed) {
                clearAll()
                Swal.fire({
                    text: "Se han eliminado todos los productos!",
                    icon: "success",
                })
            } else {
                Swal.fire({text: "Tus productos están a salvo!", icon: "info"})
            }
        })
    }

    const vaciarItem = (id) =>{
        Swal.fire({
            title: "Quieres borrar este ítem del carrito?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            dangerMode: true,
            confirmButtonText: "Si, eliminar!"
        })
        .then((borrarProd) => {
            if (borrarProd.isConfirmed) {
                removeItem(id)
                Swal.fire({
                    text: "Se ha eliminado el ítem!",
                    icon: "success",
                })
            } else {
                Swal.fire({text: "Se ha cancelado la acción.", icon: "info"})
            }
        })
    }

    return(
        <div>
            <NavBar />
            <div className="container my-5">
                <div className="row ">
                    <div className="col-12 col-md-7">
                        <h3 className="cart-title">Mi carrito</h3>
                        <div className="product-item border">
                            {cartSize(items) > 0 ? (
                                items.map((prod) => ( 
                                <>
                                <div key={prod.id} className="border product-item-details mx-1 my-3">
                                    <div>
                                        <div className="row pt-2">
                                            <div className="col-1 product-details__img text-center">
                                                <img src={prod.item.imagenURL} alt="foto del prod" className="ml-0 d-block" />
                                            </div>
                                            <div className="col-6 offset-1">
                                                <h4>{prod.item.nombre}</h4>
                                                <p className="detail-subt">{prod.item.productor}</p>
                                            </div>
                                            <div className="col-2 offset-sm-1 text-center">
                                                <button id="carrito" type="button" className="btn btn-light rounded-circle">
                                                    <img onClick={()=> vaciarItem(prod.item.id)} src="https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Simple-Icon.png" alt="eliminar" className="rounded-pill border border-dark" width="30"/>
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
                                    <button onClick={() => VaciarCarrito()} className="col-4 offset-4 btn vaciarCart">Vaciar carrito</button>
                                </div> 
                                </>) : (<> </>)
                            }
                        </div>               
                    </div>

                    <div className="col-12 col-md-4 offset-md-1 mt-5 mt-md-0 cart-summary">
                    <h3 className="cart-title">Resumen de compra</h3>
                        <div className="border">
                            <div className="cart-summary_style">
                                <p className="cart-summary_concept">Subtotal:</p>
                                <p className="cart-summary_value"><CurrencyFormat value={subtotal} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
                            </div>
                            <div className="cart-summary_style">
                                <p className="cart-summary_concept">Descuentos</p>
                                <p className="cart-summary_valueDesc">(-<CurrencyFormat value={descuentos} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>)</p>
                            </div>
                            <div className="cart-summary_style">
                                <p className="cart-summary_concept">Total</p>
                                <p className="cart-summary_value"><CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></p>
                            </div>
                            {descuentos > 0 ? (<>
                                <div className="cart-summary_style">
                                    <p className="cart-summary_discount">Genial! Has accedido a un descuento del 15% sobre algunos productos!</p>
                                </div>
                             </>) : (<> </>)}
                            <div className="my-3">
                                <Link to="/checkout" className="col-4 offset-4 col-md-8 offset-md-2 col-lg-6 offset-lg-4 cart-summary_finish">Terminar Compra</Link>
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