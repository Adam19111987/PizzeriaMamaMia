import Header from "./Header";
import CardsPizza from "./CardsPizza";
import "./Home.css";
import { useState, useEffect } from "react";
// import { pizzas } from "../Pizza";

function Home() {
  const [listpizzas, setListPizzas] = useState([]);

  // funcion llamar API

  const callAPI = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas";
      const response = await fetch(url);
      const data = await response.json();
      setListPizzas(data);
    } 
    catch(e)  {
      alert(e.message);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <div className="imgfondo">
        <div className="contenedorHeader">
          <Header
            title="¡Pizzería Mamma Mía!"
            description="Tenemos las mejores pizzas que podras encontar."
          />
        </div>
      </div>
      <div className="contenedorCards d-flex flex-wrap gap-4 justify-content-center mt-5">
        {listpizzas.map((pizza) => (
          <CardsPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
