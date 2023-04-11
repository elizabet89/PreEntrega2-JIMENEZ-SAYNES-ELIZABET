
import './App.css';
import ItemDetailsContainer from './componentes/ItemDetailsContainer';
// import ItemDetails from './componentes/ItemDetails';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { createContext, useState } from 'react';
const cartContext= createContext();

function App() {
  const CartProvider= cartContext.Provider;
  const [cart,setCart]=useState([]);
  //inmutable
  //agregarAlcarrito()
  
  
  return (
    //Provider (envolver todo CON EL PROVIDER//

   <CartProvider value={{ cart:cart, setCart:setCart}}>

    <BrowserRouter>
     
      <Navbar/>  
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/inicio" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoriaid" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<ItemDetailsContainer/>}/>
        <Route path="*" element={<h5>Error 404 pagina no funciona</h5>}/>
       
      </Routes>
   
    </BrowserRouter>

    </CartProvider> 

  );
}


export default App;

export {cartContext}