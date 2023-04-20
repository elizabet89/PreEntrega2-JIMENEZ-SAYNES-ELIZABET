import React from "react";
import '../estilos/Ckeckout.css'
import logoCheckout from '../logo/check-solid.svg'
// con use params pueden leer el id
 const Checkout=()=>{
  return(
   <div className="checkout">
     <div className="checkout-ok">
        <img className="checkout-img" alt="imagen-ckeckout" src={logoCheckout}></img>
     </div>
     <h4 className="checkout-mensaje">Su Compra Fue Registrada Exitosamnete</h4>
   </div> 
  )
 }
 export default Checkout