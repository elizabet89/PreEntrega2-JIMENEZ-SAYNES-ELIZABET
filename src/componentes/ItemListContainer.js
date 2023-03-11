import React from "react";
import '../estilos/ItemListContainer.css'

function ItemListContainer(props){
  return(
      
    <section className="contenedor-saludo">

       <h2 className="saludo">{props.saludo}</h2>

    </section>


  );
}
export default ItemListContainer;