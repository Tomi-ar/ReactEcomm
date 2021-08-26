import { Button } from 'react-bootstrap';

export const Terminar = ({q, onAgregar, item}) => {
    return (
    <Button className="agregar" variant="warning" onClick={() => onAgregar(item, q)}>Finalizar compra de {q} item(s)</Button>
    )
}