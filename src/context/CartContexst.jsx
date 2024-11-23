import { createContext, useState } from "react";
import { pizzas } from "../Pizza";
export const CartContext = createContext();

const CartProvider = ({children}) => {
   const[carts, setCarts] = useState( pizzas.map((pizza) => ({ ...pizza, cantidad: 1 })).slice(0, 3));

   const incrementardecrementar = (id, dess) => {
    setCarts((prevRenders) =>
      prevRenders
        .map((render) =>
          render.id === id
            ? { ...render, cantidad: Math.max(0, render.cantidad + dess) }
            : render
        )
        .filter((render) => render.cantidad > 0)
    );
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