import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import "../estilos.css";

function ItemCount({ max, cantidad, onAdd, id}) {
    const [counter, setCounter] = useState(0);
    return (
      <div>
        <div className="botones">
          <Button variant="outline-primary" onClick={() => {if (counter > cantidad) { setCounter(counter - 1);}
            }}>{" "}-{" "}</Button>
          <p>{counter}</p>
          <Button variant="outline-primary" onClick={() => {if (counter < max) {setCounter(counter + 1);}
            }}>+</Button>
        </div>  
        <Button id={id} className="agregar" variant="warning" onClick= {() => onAdd(counter)}>+ Agregar</Button>
      </div>
    );
}

export default ItemCount;