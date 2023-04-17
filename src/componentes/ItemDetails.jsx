import  { useContext } from "react";
import {useState,useEffect } from "react";
// import Datos from '../data/products'
import { useParams } from "react-router-dom";
import '../estilos/ItemDetails.css'
import ItemCount from "./ItemCount";
import { cartContext } from "../context/cartContext";
import { getSingleItem } from "../serives/dbfirebase";


// ===== mock async services=========


// function funcionDetalle(idURL){

// const promesa= new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     const encontrado=Datos.find(item =>item.id === Number(idURL))
//     resolve(encontrado)
//   },500);

//  })

//  return promesa;
// }
 //=================================
// getSingleItem()

const ItemDetailsContainer=()=>{
  // const [addedToCart, setAddedToCart] =useState(false)
      const [product, setproduct] =useState([])
     
      let { id } = useParams();// Obtengo el paramtro de la url(es decir obtengo la url=la ruta con el use params)
      // getSingleItem(id)
      const {cart,addItem}=useContext(cartContext)
     console.log("cart:",cart)
      useEffect(()=>{
  
        getSingleItem(id).then((response)=>{
              console.log(response)
            setproduct(response)
       })

       }, [])

//========================================
function onAddToCart(cant){
    // setAddedToCart(true)
    addItem(product, cant)
    console.log("agregado al carrito")
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
  
    </div>

    
  )

}
export default ItemDetailsContainer;