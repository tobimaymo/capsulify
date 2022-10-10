import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const calcTotal = () => {
    return items.reduce((acc, el) => el.item.price * el.quantity + acc, 0);
  };

  const isInCart = (id) => items.find((e) => e.item.id === id) !== undefined;
  
  const clear = () => {
    setItems([]);
  };
  
  const cartSize =
    items.length > 0 ? items.reduce((acc, cur) => acc + cur.quantity, 0) : 0;

  
  const getItem = (id) => items.find((e) => e.item.id === id);


  const removeItems = (id, ammount) => {
    if (getItem(id).quantity > ammount) {
      setItems(
        items.map((e) => {
          if (e.item.id === id) e.quantity -= ammount;
          return e;
        })
      );
    } else {
      removeItem(id);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((e) => e.item.id !== id));
  };
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setItems(
        items.map((i) => {
          if (i.item.id === item.id) i.quantity = i.quantity += quantity;
          return i;
        })
      );
    } else {
      setItems([...items, { item, quantity }]);
    }
  };

  useEffect(() => {
    console.log("cart", items);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        isInCart,
        removeItem,
        clear,
        cartSize,
        removeItems,
        calcTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};