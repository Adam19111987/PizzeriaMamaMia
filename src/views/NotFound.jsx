
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

function NotFound() {
  return (
    <div>
      <h1 className="text-center">Vaya este sitio no existe!</h1>
   <Link to= "/"><Button variant="danger" > 🔙 Volver</Button></Link>
      </div>
  )
}

export default NotFound

