import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./CardsPizza.css";
import Button from "react-bootstrap/Button";

function CardsPizza({ name, price, ingredients, img }) {
  return (
    <Card style={{ width: "23rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <h4 className="fw-bold">{name}</h4>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Card.Body className="text-center fw-light">
          <h5>Ingredientes</h5>
          <p className="ingredientes"> 🍕 {ingredients.join(", ")}</p>
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

export default CardsPizza;
