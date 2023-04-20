import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import "../estilos/CartContainer.css";
import { createOrder } from "../serives/dbfirebase";  
import swal from "sweetalert";
const CartContainer = () => {
  
  const context = useContext(cartContext);
  const cart = context.cart;
  const getPriceInCart = context.getPriceInCart;
  const cartClear = context.cartClear; 
  const deleteItem=context.deleteItem
 
  
  // renderizando condicional -- si el carrito esta vacio mostrar mensaje carrito vacio

  if (cart.length === 0) {
    return <h5 className="cart-vacio">Su Carrito esta Vacio...</h5>;
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
 

  //redireccionar
  const orderCompleta= await swal({
 
    title:"Su Compra Se Registro Exitosamente",
    text:"Nº de Ticket: "+ orderId,
    icon:"success"
  })
    // navigate(`/checkout/${orderId}`)
    cartClear()
}

  // desglozar el carrito si tiene contenido

  return (
    <section
      className="sectionCart"
      style={{ display: "grid",placeContent:"center" ,textAlign:"center"}} >
     
      <table className="table">
        <thead>
          <tr>
            <th className="cart-th">Imagen</th>
            <th className="cart-th">Descripcion</th>
            <th className="cart-th">Cantidad</th>
            <th className="cart-th">Precio</th>
            <th className="cart-th">Subtotal</th>
            <th className="cart-th"></th>
          </tr>
        </thead>
        <tbody className="tbody">
          {cart.map((item) => {
            return (
              
                <tr key={item.id} className="cart-trbody">
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
                  <td>
                    <button onClick={(idItem)=>deleteItem(item.id)} className="cart-delate">X</button>
                  </td>
                </tr>
              
            );
          })}
        </tbody>
        <tfoot >
        <tr>
           <td className="cart-total"  colSpan="6"> <span>El tolal de su compra: ${getPriceInCart()}</span></td>
        </tr>
         
        </tfoot>
      </table>
      <button className="compra-btn" onClick={handleCheckout}>Terminar compra</button>
    </section>
  );
};
export default CartContainer;
