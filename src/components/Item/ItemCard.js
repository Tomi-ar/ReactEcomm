import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../estilos.css'


function ItemCard ({id, nombre, tipo, productor, precio, imagenURL, max, cantidad}){

    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={imagenURL} />
            <Card.Body>
                <Card.Title className="cardTitulo">{nombre}</Card.Title>
                <Card.Subtitle className="cardSubtitulo">{tipo}</Card.Subtitle>
                <Card.Text className="cardProductor">{productor}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <div className="contador">
                    <ItemCount max={max} cantidad={cantidad}/>
                    <p className="itemStock">Stock disponible: {max}</p>
                </div>
                <Button id={id} className="agregar" variant="outline-primary">+ Agregar</Button>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;