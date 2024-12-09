import "./Cart.css";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContexst";
import { useContext, useState, useEffect } from "react";
import { PassContext } from "../context/PassContext";

function Cart() {
  const { carts, increment, decrement, formattedTotal } = useContext(CartContext);
  const { token } = useContext(PassContext);
  const [loading, setLoading] = useState(false);

  // Función para enviar el carrito al backend
  const handleCheckout = async () => {
    if (!token) {
      Swal.fire({
        title: "Error!",
        text: "Debes estar logueado para realizar la compra.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    if (carts.length === 0) {
      Swal.fire({
        title: "Error!",
        text: "El carrito está vacío.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ items: carts }),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "¡Compra exitosa!",
          text: `Tu pedido ha sido procesado. ID de orden: ${result.orderId}`,
          icon: "success",
          confirmButtonText: "Cerrar",
        });

        // Limpiar el carrito después de la compra
        // Aquí podrías actualizar el estado global o localStorage
        // Ejemplo: Clear the cart context and localStorage
        localStorage.removeItem("cart");
        // Actualizar el carrito en el estado
        // Aquí podrías hacer un reset de los carts en el contexto
      } else {
        Swal.fire({
          title: "Error!",
          text: result.message || "Hubo un problema al procesar tu compra.",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Hubo un problema al enviar el carrito. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    } finally {
      setLoading(false);
    }
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
                  <Button variant="outline-primary" onClick={() => increment(item.id, 1)}>
                    +
                  </Button>
                  <p>{item.cantidad}</p>
                  <Button variant="outline-secondary" onClick={() => decrement(item.id, 1)}>
                    -
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="Total">
        <h3>Total: ${formattedTotal}</h3>
        <button
          onClick={handleCheckout}
          className="boton"
          disabled={loading || !token || carts.length === 0}
        >
          {loading ? "Procesando..." : "Pagar"}
        </button>
      </div>
    </>
  );
}

export default Cart;
