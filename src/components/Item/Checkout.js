import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useHistory} from "react-router-dom";
import '../estilos.scss';
import Footer from "../footer/Footer";
import NavBar from "../navBar/navBar";
import { getFirestore } from "../firebase";
import firebase from 'firebase/compat/app';


const Checkout = () => {
    const db = getFirestore();
    const {items, cartSize, clearAll} = useContext(CartContext);
    const history = useHistory();
    const saveHistory = (id) => history.push(`/thankyou/${id}`);

    const subtotal = items.reduce((a,b) => a + b.item.precio*b.q, 0);
    const descuentos = 0;
    const total = subtotal - descuentos;

    const [formData, setFormData] = useState({
        nombre: '',
        apellido:'',
        email: '',
        telefono: '',
    });

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

     const newOrder = {
            buyer: formData,
            items: items.map(({item, q}) => ({
                item: {
                id: item.id,
                title: item.nombre,
                precio: item.precio,
            },
                q: q
            })),
            totalPrice: total,
            totalProducts: cartSize(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        };

    const handleFinishPurchase = (e) => {
        e.preventDefault();
       
        console.log(newOrder);

        const orders = db.collection('orders');
        const batch = db.batch();

        orders.add(newOrder).then((response) => {
            console.log(response);
            items.forEach(({item, q}) => {
                const docRef = db.collection('Items').doc(item.id)
                batch.update(docRef, {max: item.max - q})
            });
            batch.commit();
            saveHistory(response.id);
            // swall success con timer de procesamiento de la orden
        })
        .catch((error) => console.log('error', error));
        
        clearAll()
    }

    return (
        <div>
            <NavBar />
            <div>
                <h1 className="titlePpal">Finaliza tu compra</h1>
                <div className="container altMin">
                    <div className="row mt-3 justify-content-center text-center">
                        <div className="col-12 col-md-6">
                            <form className="formulario">
                                <div className="form-group">
                                    <label for="nombre">Nombre</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Ingresa tú Nombre" 
                                        name="nombre" 
                                        id="nombre" 
                                        value={formData.nombre}
                                        onChange={handleChangeInput}
                                        required/>
                                </div>
                                <div className="form-group">
                                    <label for="apellido">Apellido</label>
                                    <input 
                                        type="apellido" 
                                        className="form-control" 
                                        placeholder="Ingresa tú Apellido" 
                                        name="apellido" 
                                        id="apellido" 
                                        value={formData.apellido}
                                        onChange={handleChangeInput}
                                        required/>
                                </div>
                                <div className="form-group">
                                    <label for="email">Correo Electronico</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Ingresa tú correo electronico" 
                                        className="form-control" 
                                        value={formData.email}
                                        onChange={handleChangeInput}
                                        required/>
                                </div>
                                <div className="form-group">
                                    <label for="apellido">Telefono</label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        placeholder="Ingresa tú nro. de telefono" 
                                        name="telefono" 
                                        id="telefono" 
                                        value={formData.telefono}
                                        onChange={handleChangeInput}
                                        required/>
                                </div>
                                <p className="medioPago"> Seleccionar tú forma de pago: </p>
                                <div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input 
                                            type="radio" 
                                            name="medioPago" 
                                            id="cred" 
                                            className="form-check-input mr-2" 
                                            required/> Tarjeta de Crédito
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input 
                                                type="radio" 
                                                name="medioPago" 
                                                id="transf" 
                                                className="form-check-input mr-2" 
                                                required/> Tarjeta de Débito
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input 
                                                type="radio" 
                                                name="medioPago" 
                                                id="transf" 
                                                className="form-check-input mr-2" 
                                                required/> Transferencia Bancaria
                                        </label>
                                    </div>
                                </div>
                                <input 
                                type="submit" 
                                to="/Thankyou"
                                disabled={[formData.nombre, formData.apellido, formData.email, formData.telefono].includes("")}
                                onClick={handleFinishPurchase}
                                class="btn btn-success btn-lg mt-3" 
                                id="enviar" 
                                value="Enviar"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout;