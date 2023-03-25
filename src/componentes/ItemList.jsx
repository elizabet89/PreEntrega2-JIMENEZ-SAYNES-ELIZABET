import React from "react";
import Item from "./Item";
import '../estilos/ItemListContainer.css'




const ItemList=(props)=>{
  return(
    <div className="contenedor-item">
      {
        props.products.map((product)=>{
           return(

            <Item 

            key={product.id}
            id={product.id}
            img={product.img}
            titulo={product.titulo}
            descripcion={product.descripcion}
            precio={product.precio}
          />

           )
          

        })
      }
   </div>
  )
}
export default ItemList