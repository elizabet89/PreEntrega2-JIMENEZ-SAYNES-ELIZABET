import React from "react";
import { useState,useEffect } from "react";
import Datos from '../data/products'
import { useParams } from "react-router-dom";
import '../estilos/ItemDetails.css'


// ===== mock async services=========


const funcionDetalle=(idURL)=>{

const promesa= new Promise((resolve,reject)=>{
  setTimeout(()=>{

    const encontrado=Datos.find(item =>item.id === Number(idURL))
    resolve(encontrado)
  },500);

 })

 return promesa;
}
 //=================================


const ItemDetailsContainer=()=>{
      const [product, setproduct] =useState([])
      let { id } = useParams();

      useEffect(()=>{
  
            funcionDetalle(id).then((response)=>{
              console.log(response)
            setproduct(response)
       })

 }, [])
//========================================

  return(
    <div className="contenedor-item">
     <article id={product.id} className='article'>
      <div className='card'>
        <figure className='card__figure'>
          <img src={product.img} className='card__img' alt={product.titulo} />
        </figure>
        <div className='card__contenido'>
          <p className='card__titulo'>{product.titulo}</p>
          <p className='card__descripcion'>{product.descripcion}</p>
          <span className='card__precio'>{`$`+ product.precio}</span>
          
        </div>
      </div>
    </article>
  
    </div>

    
  )

}
export default ItemDetailsContainer;