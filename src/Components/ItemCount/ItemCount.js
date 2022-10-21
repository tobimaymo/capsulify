import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const suma = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };
  const resta = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const AgregarCantidad = () => {
    onAdd(count);
  };
  return (
    <>
      <div>
        <div id="contenedor-productos">
          <button className="button-74" onClick={resta}>
            {" "}
            -{" "}
          </button>
          <div className="count"> {count}</div>
          <button className="button-74" onClick={suma}>
            {" "}
            +{" "}
          </button>
        </div>
        <div>
          <button className="button-75" onClick={AgregarCantidad}>
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
