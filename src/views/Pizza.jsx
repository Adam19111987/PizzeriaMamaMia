import CardsPizza from "../components/CardsPizza";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function Pizza() {
  const [listpizzas, setListPizzas] = useState({});
  const {id} = useParams();

  const callAPI = async () => {
    try {
      const url = `http://localhost:5000/api/pizzas/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setListPizzas(data);
    } catch (e) {
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
        {Object.keys(listpizzas).length > 0 &&
          ( <CardsPizza
              key={listpizzas.id}
              desc ={listpizzas.desc}
              name={listpizzas.name}
              price={listpizzas.price}
              ingredients={listpizzas.ingredients}
              img={listpizzas.img}
              isActive = {false}
            />
          )}
      </div>
    </>
  );
}

export default Pizza;
