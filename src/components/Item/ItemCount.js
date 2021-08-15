import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import "../estilos.css";

function ItemCount({ max, cantidad }) {
    const [counter, setCounter] = useState(cantidad);
    return (
      <div className="botones">
        <Button variant="outline-primary" onClick={() => {if (counter > cantidad) { setCounter(counter - 1);}
          }}>-</Button>
        <p>{counter}</p>
        <Button variant="outline-primary" onClick={() => {if (counter < max) {setCounter(counter + 1);}
          }}>+</Button>
      </div>
    );
}

export default ItemCount;