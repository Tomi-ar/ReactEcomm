import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import '../estilos.css'
import { Link } from 'react-router-dom';
import { Terminar } from './Terminar';
import { CartContext } from '../context/CartContext';


function ItemDetail (item){

    const [cantidadAgregar, setCantidadAgregar] = useState(0);
    const [showButton, setShowButton] = useState(false)
    
    const { addItem } = useContext(CartContext);

    const onAdd = (a) => {
        setCantidadAgregar(a);
        setShowButton(true)
    }

    const onAgregar = (item, a) => {
        addItem(item, a);
    }

    return (
        <div className="row itemDetail align-middle">
            <div className="col-6 itemDetail_img">
                <img src={item.imagenURL} alt="Imagen producto" />
            </div>
            <div className="col-6 itemDetail_info my-auto">
                <h3 className="cardTitulo">{item.nombre}</h3>
                <h4 className="cardSubtitulo">{item.tipo}</h4>
                <p className="cardProductor">{item.productor}</p>
                <p className="cardPrecio">${item.precio}</p>
                <div className="align-self-center">

                {(cantidadAgregar >0 && showButton) ? 
                    <Link to="/cart" > 
                    <Terminar q={cantidadAgregar} item={item} onAgregar={onAgregar}/> </Link> :
                    <ItemCount max={item.max} cantidad={item.cantidad} onAdd={onAdd} />}
                {/* <ItemCount max={item.max} cantidad={item.cantidad} onAdd={onAdd} />
                {cantidadAgregar >0 && showButton && <Link to="/cart" > 
                <Terminar q={cantidadAgregar} item={item} onAgregar={onAgregar}/> </Link>
                } */}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;