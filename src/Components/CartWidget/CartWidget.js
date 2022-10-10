import React, { useContext } from "react";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./CartWidget.css"

function CartWidget() {  
  const {cartSize} = useContext(CartContext)

  return ((
      <Link to="/capsulify/cart" id="boton-carrito">
        <span id="contadorCarrito">{cartSize}</span>
        <GrCart
          size="40px"
          className="cartWidget"
        />
      </Link>
    )
  );
}
export default CartWidget;
