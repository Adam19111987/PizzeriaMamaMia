import Button from "react-bootstrap/Button";
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="profile">
        <h3 className="text-center">Bienvenido!</h3>
        <img className="image" src="../src/assets/img/usuario.png" alt="usuario" />

        <p>adam.cds@gmail.com</p>

        <Button className="boton">Cerrar sección</Button>
      </div>
    </>
  );
}

export default Profile;
