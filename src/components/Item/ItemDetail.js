import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import '../estilos.css'
import { Link } from 'react-router-dom';
import { Terminar } from './Terminar';


function ItemDetail ({id, nombre, tipo, productor, precio, imagenURL, max, cantidad}){

    const [cantidadAgregar, setCantidadAgregar] = useState(0);
    const [showButton, setShowButton] = useState(false)
    const onAdd = (q) => {
        setCantidadAgregar(q);
        setShowButton(true)
    }

    return (
        <div className="row itemDetail align-middle">
            <div className="col-6 itemDetail_img">
                <img src={imagenURL} alt="Imagen producto" />
            </div>
            <div className="col-6 itemDetail_info my-auto">
                <h3 className="cardTitulo">{nombre}</h3>
                <h4 className="cardSubtitulo">{tipo}</h4>
                <p className="cardProductor">{productor}</p>
                <p className="cardPrecio">${precio}</p>
                <div className="align-self-center">

                <ItemCount max={max} cantidad={cantidad} onAdd={onAdd} />
                {cantidadAgregar >0 && showButton && <Link to="/cart" > 
                <Terminar q={cantidadAgregar}/> </Link>
                }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;