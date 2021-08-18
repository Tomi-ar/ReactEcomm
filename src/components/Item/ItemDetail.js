import React from 'react';
import { Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../estilos.css'


function ItemDetail ({id, nombre, tipo, productor, precio, imagenURL, max, cantidad}){

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
                    <ItemCount max={max} cantidad={cantidad}/>
                     <p className="itemStock">Stock disponible: {max}</p>
                </div>
                <Button id={id} className="agregar" variant="warning">+ Agregar</Button>
            </div>
        </div>
    );
}

export default ItemDetail;