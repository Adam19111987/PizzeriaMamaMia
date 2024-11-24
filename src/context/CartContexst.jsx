import { createContext, useState } from "react";
import { pizzas } from "../Pizza";
export const CartContext = createContext();

const CartProvider = ({children}) => {
   const[carts, setCarts] = useState( pizzas.map((pizza) => ({ ...pizza, cantidad: 1 })).slice(0, 3));

   const incrementardecrementar = (id, cantidad) => {
    setCarts((prevCarts) => {
      const itemIndex = prevCarts.findIndex((item) => item.id === id);
  
      if (itemIndex >= 0) {
        
        const updatedCarts = [...prevCarts];
        updatedCarts[itemIndex].cantidad = Math.max(0, updatedCarts[itemIndex].cantidad + cantidad);
        
     
        return updatedCarts.filter((item) => item.cantidad > 0);
      } else if (cantidad > 0) {
      
        const newProduct = pizzas.find((pizza) => pizza.id === id);
        return [...prevCarts, { ...newProduct, cantidad: cantidad }];
      }
  
      return prevCarts;
    });
  };

  const sumaTotal = carts.reduce(
    (sum, render) => sum + render.price * render.cantidad,
    0
  );
 
  const formatoTotal = sumaTotal.toLocaleString("es-Es");

  


  return(
    <CartContext.Provider value={{carts, setCarts, incrementardecrementar, formatoTotal}}>{children}</CartContext.Provider>
  )

}

export default CartProvider;