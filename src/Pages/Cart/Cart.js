import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import Shop from "./Shop";

export const Cart = () => {
  const { items, clear, removeItems } = useContext(CartContext);
  return (
    <div className="album py-5 cartText bg-light" id="divMain">
      <div id="contenedor-cart">
        {items.map((product, i) => (
          <div>
            <p className="tituloCart">
              {product.item.titulo} by: {product.item.categoria}
            </p>
            <div className="sombreadogeneral navcolor">
              <img
                src={product.item.img}
                className="cartImg"
                alt={product.item.alt}
              />
            </div>
            <p className="precioCart">
              Precio: ${product.item.precio}ud - Cantidad: {product.quantity}
            </p>
            <p className="precioCart">
              ${product.item.precio * product.quantity}
            </p>
            <button onClick={() => removeItems(product.item.id, 1)} size="28px">
              X
            </button>
          </div>
        ))}
      </div>
      <button className="btn btn-sm btn-outline-danger" onClick={() => clear()}>
        {" "}
        Vaciar{" "}
      </button>
      <Shop />
    </div>
  );
};

export default Cart;
