import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { PassContext } from "../context/PassContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(PassContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validaLogin = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "Debes llenar todos los campos",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    setLoading(true);
    try {
      const user = await userLogin(email, password);
      if (user) {
        Swal.fire({
          title: "Success!",
          text: "Has iniciado sesión con éxito",
          icon: "success",
          confirmButtonText: "Cerrar",
        });
        navigate("/Profile");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Credenciales incorrectas",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Hubo un problema al iniciar sesión. Intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4" style={{ width: "25rem" }}>
        <h1 className="text-center mb-4">Iniciar sesión</h1>
        <form onSubmit={validaLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-dark w-100" disabled={loading}>
              {loading ? "Cargando..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
