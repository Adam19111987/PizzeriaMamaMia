import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { PassContext } from "../context/PassContext";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(PassContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validaFormulario = async (e) => {
    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Debes llenar todos los campos",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    if (password === confirmPassword && password.length >= 6) {
      try {
        const user = await registerUser(email, password);
        if (user) {
          Swal.fire({
            title: "Success!",
            text: "Cuenta creada con éxito",
            icon: "success",
            confirmButtonText: "Cerrar",
          });
          navigate("/"); // Redirigimos al login o página principal
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Hubo un problema al crear la cuenta. Intenta nuevamente.",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "El password y el password confirmation deben ser iguales y superiores a 6 caracteres",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ width: "25rem" }}
          className="d-flex justify-content-center flex-column align-items-center border border-3 border-warning-subtle rounded-3 gap-3 mt-3 mb-3 pt-3 pb-3"
        >
          <h1>Regístrate</h1>
          <form onSubmit={validaFormulario}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
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
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
