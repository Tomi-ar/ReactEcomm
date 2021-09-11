import { Button } from 'react-bootstrap';
import "../estilos.scss";

export const Terminar = ({q, onAgregar, item}) => {
    return (
    <Button className="agregar" variant="warning" onClick={() => onAgregar(item, q)}>Agregar {q} al carrito</Button>
    )
}