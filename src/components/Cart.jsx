import { pizzas } from "../Pizza";
import { useState } from "react";
import "./Cart.css";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

function Cart() {
  const [renders, setRenders] = useState(
    pizzas.map((pizza) => ({ ...pizza, cantidad: 1 })).slice(0, 3)
  );

  const incrementardecrementar = (id, dess) => {
    setRenders((prevRenders) =>
      prevRenders
        .map((render) =>
          render.id === id
            ? { ...render, cantidad: Math.max(0, render.cantidad + dess) }
            : render
        )
        .filter((render) => render.cantidad > 0)
    );
  };
  const sumaTotal = renders.reduce(
    (sum, render) => sum + render.price * render.cantidad,
    0
  );
  const formatoTotal = sumaTotal.toLocaleString("es-Es");

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
          {renders.map((render) => (
            <li key={render.id} className="listas">
              <img src={render.img} alt={render.name} />
              <p>{render.name}</p>
              <div className="contenedor-botones">
                <p>Precio: ${render.price * render.cantidad}</p>
                <div className="botones">
                  <Button
                    variant="outline-primary"
                    onClick={() => incrementardecrementar(render.id, 1)}
                  >
                    +
                  </Button>
                  <p>{render.cantidad}</p>
                  <Button
                    variant="outline-secondary"
                    onClick={() => incrementardecrementar(render.id, -1)}
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
        <h3> Total :${formatoTotal}</h3>
        <button onClick={() => pagoRealizado()} className="boton">
          Pagar
        </button>
      </div>
    </>
  );
}

export default Cart;
