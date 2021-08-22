import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../estilos.css'


function ItemCard ({id, nombre, tipo, productor, precio, imagenURL}){

    const history = useHistory();
    const goToDetail = () => history.push(`/itemDetail/${id}`);

    return (
        <div className="col-3 my-3">
            <Card className="h-100" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={imagenURL} width="222" height="222"/>
            <Card.Body>
                <Card.Title className="cardTitulo">{nombre}</Card.Title>
                <Card.Subtitle className="cardSubtitulo">{tipo}</Card.Subtitle>
                <Card.Text className="cardProductor">{productor}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <div className="col text-center"><Button onClick={goToDetail} id={id} variant="outline-primary">Mas info</Button></div>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;