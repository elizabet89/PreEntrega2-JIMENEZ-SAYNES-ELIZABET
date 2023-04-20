import { createContext,useState } from "react";
const cartContext= createContext();
const Provider= cartContext.Provider;


function CartProvider(props){

  const [cart,setCart]=useState([]);
  function addItem(product, cant){

    const newCart=[...cart]
    let valor=newCart.findIndex((item)=>item.id === product.id) //crud create read update delete

    if(valor === -1){
    newCart.push({...product,cant})
    setCart(newCart)
  }else{
    newCart[valor].cant=newCart[valor].cant+ cant;
    setCart(newCart)
  }
  
  }

  function getCountInCart(){
     let conta=0;
    
      cart.forEach((item)=>{
              if(item.cant ===0){
                return
              }else{
                conta+= item.cant
              }
      })
      return conta;
    }
   
 
  function getPriceInCart(){
    let total=0
    cart.forEach((item)=>{
   
       total+= item.cant * item.precio
       
    })
    return total
  }

  function deleteItem(idTem){
      setCart(cart.filter((item)=>item.id !== idTem) )
  }
  function cartClear() {
   
    setCart([]);

  }

  return(

    <Provider value={{ cart, addItem, getPriceInCart,getCountInCart,cartClear,deleteItem}}>
     {props.children}
    </Provider>
  )
}
export {cartContext,CartProvider}