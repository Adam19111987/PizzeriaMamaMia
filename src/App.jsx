import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Navabarr from "./components/Navabarr";
import Footer from "./components/Footer";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
import FormularioRegistro from "./views/FormularioRegistro";
import NotFound from "./views/NotFound";
import Formulario from "./views/Formulario";
import { BrowserRouter, Navigate } from 'react-router-dom'


import "./App.css";
import Pizza from "./views/Pizza";
import CartProvider from "./context/CartContexst"
import { PassContext } from "./context/PassContext";
import { useContext } from "react";
function App() {
  const { token } = useContext(PassContext)
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <div className="contenedor">
        <nav>
          <Navabarr />
        </nav>

        <header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Registrer" element={!token ?<FormularioRegistro /> : <Navigate to="/"/> } />
            <Route path="/Login" element={ !token ? <Formulario /> : <Navigate to="/"/>} />
            <Route path="/Profile" element={token ? <Profile /> : <Navigate to="/login" />} />

            <Route path="/Cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>

        <footer className="footers mt-4 p-3 mb-4">
          <Footer />
        </footer>
      </div>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
