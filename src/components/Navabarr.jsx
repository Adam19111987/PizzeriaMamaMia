import Button from "react-bootstrap/Button";
import "./Navabarr.css";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContexst";
import { useContext } from "react";
import { PassContext } from "../context/PassContext";
import { useNavigate } from "react-router-dom";

function Navabarr() {
  const { formattedTotal } = useContext(CartContext);
  const { token, logout } = useContext(PassContext);
  const Navigate = useNavigate();
  const total = formattedTotal;
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-warning mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";

  const handleLogout = () => {
    logout();
    Navigate("/Logout");
  };

  return (
    <>
      <div className="contenedorNav d-flex justify-content-between">
        <div className="d-flex gap-4">
          <Link to = "/" className="text-decoration-none">
          <h3 className="tituloNav">Pizzería Mamma Mia!</h3>
          </Link>
          <NavLink to="/" className={activeClass}>
            🍕 Home
          </NavLink>

          {token ? (
            <>
              <NavLink
                to="/Profile"
                className={activeClass}
               
              >
                🔓 Profile
              </NavLink>
              <NavLink to="/Logout" className={activeClass}  onClick={handleLogout}>
                🔒 Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/Login" className={activeClass}>
                🔒 Login
              </NavLink>
              <NavLink to="/Registrer" className={activeClass}>
                🔒 Registrer
              </NavLink>
            </>
          )}
        </div>

        <div className="botonTotal me-5">
          <Button variant="outline-primary">
            <NavLink to="/Cart" className={activeClass}>
              🛒 Total: ${total}
            </NavLink>{" "}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navabarr;
