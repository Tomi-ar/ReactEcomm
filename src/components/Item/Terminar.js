import { Button } from 'react-bootstrap';

export const Terminar = ({q}) => {
    return (
    <Button className="agregar" variant="warning">Finalizar compra de {q} item(s)</Button>
    )
}