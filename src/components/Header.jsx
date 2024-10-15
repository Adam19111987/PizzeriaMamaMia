import "./Header.css";

function Header({ title, description }) {
  return (
    <>
      <h2 className="titulo">{title}</h2>
      <p className="descripcion">{description}</p>
      <hr />
    </>
  );
}

export default Header;
