    

import "./Cart.css";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContexst";
import { useContext } from "react";

function Cart() {
  const{carts, increment, decrement, formattedTotal } = useContext(CartContext);



  const pagoRealizado = () => {
    Swal.fire({
      title: "Pago realizado con exito!",
      text: "Presiona ok para continuar",
      icon: "success",
      confirmButtonText: "ok",
    });
  };

  return (
    <>
      <h2>Detalles del pedido:</h2>
      <div className="contenedor-Cart">
        <ul>
          {carts.map((item) => (
            <li key={item.id} className="listas">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <div className="contenedor-botones">
                <p>Precio: ${item.price * item.cantidad}</p>
                <div className="botones">
                  <Button
                    variant="outline-primary"
                    onClick={() =>increment(item.id, 1)}
                  >
                    +
                  </Button>
                  <p>{item.cantidad}</p>
                  <Button
                    variant="outline-secondary"
                    onClick={() => decrement(item.id, 1)}
                  >
                    -
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="Total">
        <h3> Total :${formattedTotal}</h3>
        <button onClick={() => pagoRealizado()} className="boton">
          Pagar
        </button>
      </div>
    </>
  );
}

export default Cart;
