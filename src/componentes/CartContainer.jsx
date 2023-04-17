import React, { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import "../estilos/CartContainer.css";
import { createOrder } from "../serives/dbfirebase";  
import swal from "sweetalert";

const CartContainer = () => {
  
  const context = useContext(cartContext);
  const cart = context.cart;
  const getPriceInCart = context.getPriceInCart;
  
  // renderizando condicional -- si el carrito esta vacio mostrar mensaje carrito vacio

  if (cart.length === 0) {
    return <h5> carrito vacio</h5>;
  }
  
//================

 async function handleCheckout(){
  const order={
    items:cart,
    buyer:{name:"oseas"},
    date:new Date(),
    total:getPriceInCart()
  }
  const orderId= await createOrder(order)
  //alert/modal/popup/sweet
  const orderComplite = await swal({
    title:"gracias por su compra",
    text:"tu compra se realizo correctamente. tu tiked de compra es:" + orderId,
    icon:"success",
    
  });
  
//  clearCart()
 
  //rendering condicional
  //redireccionar
}
  // desglozar el carrito si tiene contenido

  return (
    <section
      className="sectionCart"
      style={{ display: "grid",placeContent:"center" ,textAlign:"center"}} >
     
      <table className="table">
        <thead>
          <tr>
            <th className="cart-tr">imagen</th>
            <th className="cart-tr">titulo</th>
            <th className="cart-tr">cantidad</th>
            <th className="cart-tr">precio</th>
            <th className="cart-tr">subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              
                <tr key={item.id}>
                  <td className="cart-td">
                    <img
                      className="cart__img"
                      src={item.url}
                      alt={item.titulo}
                    />
                  </td>
                  <td className="cart-td">
                    <h5>{item.titulo}</h5>
                  </td>
                  <td className="cart-td">
                    <p>{item.cant}</p>
                  </td>
                  <td className="cart-td">
                
                    <p>{item.precio}</p>
                  </td>
                  <td className="cart-td">
                 
                    <p>{item.precio * item.cant}</p>
                  </td>
                </tr>
              
            );
          })}
        </tbody>

        
      </table>
      <>
      <span>El tolal de su compra:{getPriceInCart()}</span>
      <button className="compra-btn" onClick={handleCheckout}> terminar compra</button>
      {/* <Button  onClick={handleCheckout}/> */}
      </>
    </section>
  );
};
export default CartContainer;
