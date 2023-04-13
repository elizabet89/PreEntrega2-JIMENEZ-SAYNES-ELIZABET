import { useContext } from "react";
import logo from "../logo/logotipo.png";
import "../estilos/Navbar.css";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
// import { cartContext } from "../App";
import { cartContext } from "../context/cartContext";


function Navbar() {
 const {cart}=useContext(cartContext)

 const context = useContext(cartContext);

 const getCountInCart = context.getCountInCart;

  return (
    <header className="contenedor-principal-header">
      <nav className="navbar">
        <img src={logo} className="navbar-img" alt="logotipo" />
        <ul className="nav-list">
          <li>
            <Link className="nav-link" to="/inicio">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/categoria/electronica">
              Electronica
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/categoria/maquillaje">
              Maquillaje
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/categoria/ropa">
              Ropa
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/categoria/calzado">
              Calzado
            </Link>
          </li>
        </ul>
        <Link to="/cart">
             <CardWidget 
             cart={getCountInCart()}

             />
        </Link>
       
      </nav>
    </header>
  );
}
export default Navbar;
