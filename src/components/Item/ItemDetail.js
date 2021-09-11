import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import '../estilos.scss'
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
        <div className="row itemDetail my-3">
            <div className="col-6 itemDetail_img h-85">
                <img src={item.imagenURL} alt="Imagen producto" />
            </div>
            <div className="col-6 itemDetail_info h-85 my-auto">
                <h3 className="cardTitle">{item.nombre}</h3>
                <h4 className="cardProductor">{item.productor}</h4>
                <p className="cardDescripcion">{item.descripcion}</p>
                <p className="cardEstilo">{item.estilo}</p>
                <p className="cardPrice">${item.precio}</p>
                <div className="align-self-center">

                {(cantidadAgregar >0 && showButton) ? 
                    <>
                    <ItemCount max={item.max} cantidad={item.cantidad} onAdd={onAdd} />
                    <Link to="/cart" className="text-decoration-none"> 
                    <Terminar q={cantidadAgregar} item={item} onAgregar={onAgregar}/> </Link> 
                    </> :
                    <ItemCount max={item.max} cantidad={item.cantidad} onAdd={onAdd} />}
                {/* <ItemCount max={item.max} cantidad={item.cantidad} onAdd={onAdd} />
                {cantidadAgregar >0 && showButton && <Link to="/cart" > 
                <Terminar q={cantidadAgregar} item={item} onAgregar={onAgregar}/> </Link>
                } */}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;