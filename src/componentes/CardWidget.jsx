import React from 'react';
import '../estilos/CardWidget.css'
function CardWidget(props){
  return(

     <div className='contenedor-icon'>
      <i  className="bi bi-cart4 icon-carrito"></i>
      <span>{props.cart}</span>
     </div>


  );
}
export default CardWidget;