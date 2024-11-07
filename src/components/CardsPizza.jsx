import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./CardsPizza.css";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function CardsPizza({ name, price, ingredients, img, id }) {
  return (
    <Card style={{ width: "24rem" }}>
      <Card.Img  className = "imagenes" variant="top" src={img} />
      <Card.Body>
        <h4 className="fw-bold">{name}</h4>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Card.Body className=" d-flex fw-light flex-column align-items-center">
          <h5>Ingredientes</h5>
          <ul className="ingredientes">
            {ingredients.map((ingredient) => (
              <li key={id}>{ingredient} </li>
            ))}
          </ul>
        </Card.Body>
      </ListGroup>
      <Card.Body>
        <p className="fw-bold text-center precio">Precio: ${price}</p>
        <div className="d-flex  justify-content-around">
          <Button style={{ border: "solid 1px black" }} variant="light">
            Ver más 👀
          </Button>{" "}
          <Button variant="dark">🛒 Añadir</Button>
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
};

export default CardsPizza;
