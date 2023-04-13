import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import "../estilos/CartContainer.css";

const CartContainer = () => {
  const context = useContext(cartContext);
  const cart = context.cart;
  const getPriceInCart = context.getPriceInCart;
  // renderizando condicional -- si el carrito esta vacio mostrar mensaje carrito vacio

  if (cart.length === 0) {
    return <h5> carrito vacio</h5>;
  }

  // desglozar el carrito si tiene contenido

  return (
    <section
      className="sectionCart"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <table>
        <thead>
          <tr >
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
              <>
                <tr>
                  <td className="cart-td">
                    <img
                      className="cart__img"
                      src={item.url}
                      alt={item.titulo}
                    />
                  </td>
                  <td className="cart-td">
                    <h5>{item.titulo}</h5>{" "}
                  </td>
                  <td className="cart-td">
                    <p>{item.cant}</p>
                  </td>
                  <td className="cart-td">
                    {" "}
                    <p>{item.precio}</p>
                  </td>
                  <td className="cart-td">
                    {" "}
                    <p>{item.precio * item.cant}</p>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>

        <span>El tolal de su compra:{getPriceInCart()}</span>
      </table>
    </section>
  );
};
export default CartContainer;
