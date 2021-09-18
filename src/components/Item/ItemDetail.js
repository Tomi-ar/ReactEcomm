import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import '../estilos.scss'
import { Link } from 'react-router-dom';
import { Terminar } from './Terminar';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';


function ItemDetail (item){

    const [cantidadAgregar, setCantidadAgregar] = useState(0);
    const [showButton, setShowButton] = useState(false)
    
    const { addItem } = useContext(CartContext);

    const onAdd = (a) => {
        setCantidadAgregar(a);
        setShowButton(true);
    }

    const onAgregar = (item, a) => {
        Swal.fire({
            title: `Has agregado ${a} item(s) al carrito `,
            text: `Producto: ${item.nombre}`,
            icon: 'success',
            width: 500,
            padding: '2em',
          })
        
        addItem(item, a);
    }

    return (
        <div className="row itemDetail my-5">
            <div className="col-12 col-md-6 itemDetail_img min-vh-80 m-auto">
                <img src={item.imagenURL} alt="Imagen producto"/>
            </div>
            <div className="col-12 col-md-6 itemDetail_info my-auto min-vh-80">
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
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;