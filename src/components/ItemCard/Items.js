import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ImgCerv from './../images/TiposCerveza.jpg';


function Item ({nombre, tipo, productor, precio, id}){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ImgCerv} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{tipo}</Card.Subtitle>
                <Card.Text>{productor}</Card.Text>
                <Card.Text>{precio}</Card.Text>
                <Button variant="primary">+ Agregar {id}</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;