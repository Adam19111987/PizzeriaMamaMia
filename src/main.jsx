import { StrictMode } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PassProvider from "./context/PassContext.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PassProvider>
   
    <App />

    </PassProvider>
  </StrictMode>,
)
