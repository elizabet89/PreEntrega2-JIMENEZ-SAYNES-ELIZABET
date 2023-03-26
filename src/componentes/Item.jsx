import React from 'react';
import '../estilos/Item.css'
import { Link } from 'react-router-dom';


const Item=(props)=>{
  return(
    <article id={props.id} className='article'>
      <div className='card'>
        <figure className='card__figure'>
          <img src={props.url} className='card__img' alt={props.titulo} />
        </figure>
        <div className='card__contenido'>
          <p className='card__titulo'>{props.titulo}</p>
          <p className='card__descripcion'>{props.descripcion}</p>
          <span className='card__precio'>{`$`+ props.precio}</span>
        </div>
        <Link className='card__ver-detalle' to={`/detalle/${props.id}`}>Ver detalle</Link>
      </div>
    </article>

  )
}
export default Item;