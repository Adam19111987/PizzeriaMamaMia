import Button from "react-bootstrap/Button";
import "./Navabarr.css";

function Navabarr() {
  const total = 25000;
  const token = false;
  const numeroFormate = total.toLocaleString("es-ES");

  return (
    <>
      <div className="contenedorNav d-flex justify-content-between">
        <div className="d-flex gap-4">
          <h3 className="tituloNav">Pizzería Mamma Mia!</h3>
          <Button variant="outline-light">🍕 Home</Button>

          {token ? (
            <>
              <Button variant="outline-light">🔓 Profile</Button>
              <Button variant="outline-light">🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline-light">🔏 Login</Button>
              <Button variant="outline-light">🔏 Register</Button>
            </>
          )}
        </div>

        <div className="botonTotal me-5">
          <Button variant="outline-primary"> 🛒 Total: ${numeroFormate}</Button>
        </div>
      </div>
    </>
  );
}

export default Navabarr;
