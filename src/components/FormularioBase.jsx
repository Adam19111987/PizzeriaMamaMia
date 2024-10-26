import "./Formularioresgistro.css";
import Swal from "sweetalert2";
import { useState } from "react";

function FormularioBase({ showPasswordConfir }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const validarForm = (e) => {
    if (
      !email.trim() ||
      !password.trim() ||
      (showPasswordConfir && !passconfirm.trim())
    ) {
      e.preventDefault();
      setError(true);
      return;
    } else if (showPasswordConfir && password !== passconfirm) {
      e.preventDefault();
      setError2(true);
      return;
    }

    setError(false);
    e.preventDefault();
    Swal.fire({
      title: "Validación exitosa!",
      text: "Presiona ok para continuar",
      icon: "success",
      confirmButtonText: "ok",
    });

    setError2(false);
  };

  return (
    <div className="contenedor-form">
      <form
        className="d-flex flex-column text-center form-group"
        onSubmit={validarForm}
      >
        <legend>Login</legend>
        <label>Correo</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          placeholder="usuario@mamamia.com"
        />
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          placeholder="ingresa aqui tu  nueva contraseña"
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          className="mb-3"
        />
        {showPasswordConfir && (
          <>
            <label> Confirma tu contraseña </label>
            <input
              type="password"
              value={passconfirm}
              placeholder="confirma tu contaraseña"
              onChange={(e) => setPassconfirm(e.target.value)}
            />
          </>
        )}

        {error ? (
          <p className="formulario">Todos los campos deben ser llenados.</p>
        ) : null}
        {error2 ? (
          <p className="formulario">¡Las contarseñas no coinciden!</p>
        ) : null}

        <div className="d-flex  justify-content-end mt-4">
          <button className=" bg-primary text-white border-0 p-2 rounded-2">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioBase;
