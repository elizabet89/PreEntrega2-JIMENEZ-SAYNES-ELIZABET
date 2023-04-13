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
            url={product.url}
            titulo={product.titulo}
            descripcion={product.descripcion}
            precio={product.precio}
            oferta={product.oferta}
            stock={product.stock}
          />

           )
          

        })
      }
   </div>
  )
}
export default ItemList