import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./CardsPizza.css";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContexst";
import { useContext } from "react";


function CardsPizza({ name, price, ingredients, img, id, desc = null, isActive,  }) {
  const navigate = useNavigate()
  const {addItemToCart} = useContext(CartContext)
  const addPizzasCards = () => {
    const newPizza = { id, name, price, img }; 
    addItemToCart(newPizza); 
  };
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Img className="imagenes" variant="top" src={img} />
      <Card.Body>
        <h4 className="fw-bold">{name}</h4>
      </Card.Body>
      <ListGroup className="list-group-flush">

      <Card.Body className="d-flex fw-light flex-column align-items-center">
  <h5>Ingredientes:</h5>
  <div className="d-flex flex-row flex-wrap justify-content-center">
    {ingredients.map((ingredient, index) => (
      <p key={index} className="mb-0 me-2">
        {ingredient}
        {index < ingredients.length - 1 && ","}
      </p>
    ))}
  </div>

</Card.Body>
<hr className="border border-success" />
{desc ? 
<div><p>{desc}</p></div> : null}
      </ListGroup>
      <Card.Body>
        <p className="fw-bold text-center precio">Precio: ${price}</p>
        <div className = {isActive ? "d-flex  justify-content-around" : "d-flex justify-content-center p-3"}>
        {isActive ?
          <Button style={{ border: "solid 1px black" }} variant="light" onClick={() => navigate(`/pizza/${id}`)}>
            Ver más 👀
          </Button> : null}{" "}
            
          <Button variant="dark" onClick={addPizzasCards}>
            🛒 Añadir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

CardsPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default CardsPizza;
