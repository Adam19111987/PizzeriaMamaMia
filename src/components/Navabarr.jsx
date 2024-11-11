import Button from "react-bootstrap/Button";
import "./Navabarr.css";
import { Link } from "react-router-dom";

function Navabarr() {
  const total = 25000;
  const token = false;
  const numeroFormate = total.toLocaleString("es-ES");

  return (
    <>
      <div className="contenedorNav d-flex justify-content-between">
        <div className="d-flex gap-4">
          <h3 className="tituloNav">Pizzería Mamma Mia!</h3>
          <Link to="/" className=" p-2 text-decoration-none links">
            🍕 Home
          </Link>

          {token ? (
            <>
              <Link to="/Profile" className=" p-2 text-decoration-none links">
                🔓 Profile
              </Link>
              <Link to="/Logout" className=" p-2 text-decoration-none links">
                🔒 Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login" className=" p-2 text-decoration-none links">
                🔒 Login
              </Link>
              <Link to="/Registrer" className=" p-2 text-decoration-none links">
                🔒 Registrer
              </Link>
            </>
          )}
        </div>

        <div className="botonTotal me-5">
          <Button variant="outline-primary">
            <Link to="/Cart" className=" p-2 text-decoration-none compra">
              🛒 Total: ${numeroFormate}
            </Link>{" "}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navabarr;
