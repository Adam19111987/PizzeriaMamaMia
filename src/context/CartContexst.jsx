import { createContext, useState } from "react";
import { pizzas } from "../Pizza";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [carts, setCarts] = useState(
    pizzas.map((pizza) => ({ ...pizza, cantidad: 1 })).slice(0, 1)
  );


  const findItemIndex = (cart, id) => cart.findIndex((product) => product.id === id);

 
  const updateItemQuantity = (cart, index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].cantidad = Math.max(0, updatedCart[index].cantidad + quantity);


    return updatedCart.filter((product) => product.cantidad > 0);
  };

 
  const addItemToCart = (pizza) => {
    setCarts((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === pizza.id);
      if (index >= 0) {
     
        return prevCart.map((item, i) =>
          i === index ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
    
      return [...prevCart, { ...pizza, cantidad: 1 }];
    });
  };
  

  const increment = (id, quantity) => {
    setCarts((prevCart) => {
      const index = findItemIndex(prevCart, id);

      if (index >= 0) {
        return updateItemQuantity(prevCart, index, quantity);
      } else {
        return addItemToCart(prevCart, pizzas, id, quantity);
      }
    });
  };


  const decrement = (id, quantity) => {
    setCarts((prevCart) => {
      const index = findItemIndex(prevCart, id);

      if (index >= 0) {
        return updateItemQuantity(prevCart, index, -quantity);
      }

      return prevCart;
    });
  };


  const totalSum = carts.reduce(
    (sum, product) => sum + product.price * product.cantidad,
    0
  );

 
  const formattedTotal = totalSum.toLocaleString("es-ES");

  return (
    <CartContext.Provider
      value={{
        carts,
        setCarts,
        increment,
        decrement,
        addItemToCart,
        formattedTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
