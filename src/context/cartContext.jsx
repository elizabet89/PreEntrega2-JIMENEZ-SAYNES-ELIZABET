import { createContext,useState } from "react";


const cartContext= createContext();
const Provider= cartContext.Provider;

//inmutable
//agregarAlcarrito()



//custome provider
function CartProvider(props){

  const [cart,setCart]=useState([]);


  //cart--inmutable
  function addItem(product, cant){
    // product.quantity=cant
    // setCart(product)
    const newCart=[...cart]
    //crud create read update delete
    newCart.push({...product,cant})
    //  setCart({...product,cant})
    setCart(newCart)
  }

  function getCountInCart(){
    let conta=0;
    cart.forEach((item)=>{
   
       conta+= item.cant
       
    })
    return conta
  }

  function getPriceInCart(){
    let total=0
    cart.forEach((item)=>{
   
       total+= item.cant * item.precio
       
    })
    return total
  }
  return(

    <Provider value={{ cart, addItem, getPriceInCart,getCountInCart}}>
     {props.children}
    </Provider>
  )
}
export {cartContext,CartProvider}