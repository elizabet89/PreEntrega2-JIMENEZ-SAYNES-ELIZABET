import React from "react";
import { useState } from "react";
import '../estilos/ItemCount.css'

const ItemCount = ({onAddToCart}) => {

  const [cant, setCant] = useState(0);

  const decrementa = () => {
    if (cant === 0) {
      return;
    } else {
      setCant(cant - 1);
    }
  };

  const incrementa = () => {
    setCant(cant + 1);
  };

// const  onAddToCart({cant})=>{

// }

  return (
    <div className="card__contenedor-btn">
      <button className="card__btn" onClick={decrementa}>
        -
      </button>
      <span className="card__span">{cant}</span>
      <button className="card__btn" onClick={incrementa}>
        +
      </button>
      <button className="cart-agregar" onClick={()=>onAddToCart(cant)}>Agregar al carrito</button>
    </div>
  );
  

};
export default ItemCount;
