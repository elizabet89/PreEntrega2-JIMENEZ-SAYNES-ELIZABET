import  { useContext } from "react";
import {useState,useEffect } from "react";
// import Datos from '../data/products'
import { useParams } from "react-router-dom";
import '../estilos/ItemDetails.css'
import ItemCount from "./ItemCount";
import { cartContext } from "../context/cartContext";
import { getSingleItem } from "../serives/dbfirebase";


const ItemDetailsContainer=()=>{
  // const [addedToCart, setAddedToCart] =useState(false)
      const [product, setproduct] =useState([])
      let { id } = useParams();// Obtengo el paramtro de la url(es decir obtengo la url=la ruta con el use params)

      const {addItem}=useContext(cartContext)
      useEffect(()=>{
        getSingleItem(id).then((response)=>{
            setproduct(response)
       })
       }, [])

//========================================
function onAddToCart(cant){
    let mensaje=document.getElementById("mensaje")
    if(cant !==0){
        mensaje.classList.add("cart__messge-ocultar")
        addItem(product, cant)
    }else if(cant ===0){
        mensaje.classList.remove("cart__messge-ocultar")
    }
    
}
  return(
    <div className="contenedor-item">
     <article id={product.id} className='article'>
      <div className='card'>
        <figure className='card__figure'>
          <img src={product.url} className='card__img' alt={product.titulo} />
        </figure>
        <div className='card__contenido'>
          <p className='card__titulo'>{product.titulo}</p>
          <p className='card__descripcion'>{product.descripcion}</p>
          <span className='card__precio'>{`$`+ product.precio}</span>
          
        </div>
         <ItemCount onAddToCart={onAddToCart} /> 
      </div>
    </article>
    <small id="mensaje" className="cart__messge cart__messge-ocultar">Agrega una cantidad</small>
  
    </div>

    
  )

}
export default ItemDetailsContainer;