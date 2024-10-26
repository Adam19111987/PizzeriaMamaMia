import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navabarr from "./components/Navabarr";
import Footer from "./components/Footer";
import FormularioRegistro from "./components/FormularioRegistro";

import Formulario from "./components/Formulario";

import "./App.css";

function App() {
  return (
    <>
      <div className="contenedor">
        <nav>
          <Navabarr />
        </nav>
        <header>
          {/* <Home /> */}
          <FormularioRegistro/>
          {/* <Formulario /> */}
        </header>

        <footer className="footers mt-4 p-3 mb-4">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
