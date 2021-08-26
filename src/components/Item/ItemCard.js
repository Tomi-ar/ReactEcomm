import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../estilos.css'


function ItemCard (item){

    const history = useHistory();
    const goToDetail = () => history.push(`/itemDetail/${item.id}`);

    return (
        <div className="col-3 my-3">
            <Card className="h-100" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={item.imagenURL} width="222" height="222"/>
            <Card.Body>
                <Card.Title className="cardTitulo">{item.nombre}</Card.Title>
                <Card.Subtitle className="cardSubtitulo">{item.tipo}</Card.Subtitle>
                <Card.Text className="cardProductor">{item.productor}</Card.Text>
                <Card.Text>${item.precio}</Card.Text>
                <div className="col text-center"><Button onClick={goToDetail} id={item.id} variant="outline-primary">Mas info</Button></div>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;