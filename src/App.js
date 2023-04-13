
import './App.css';
import ItemDetailsContainer from './componentes/ItemDetailsContainer';
// import ItemDetails from './componentes/ItemDetails';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import { createContext, useState } from 'react';
import { CartProvider } from './context/cartContext';
import CartContainer from './componentes/CartContainer';

//================  FIREBASE   ========================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3pPLEVCpSXNQRqJYjRUQsUAxufX80u6c",
  authDomain: "react-01-ab4bd.firebaseapp.com",
  projectId: "react-01-ab4bd",
  storageBucket: "react-01-ab4bd.appspot.com",
  messagingSenderId: "1044344489356",
  appId: "1:1044344489356:web:2f6c45f9ae028197f102a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
//=================================================================


function App() {
 
  return (
    //Provider (envolver todo CON EL PROVIDER//

   <CartProvider >
   {/* clindren*/}

    <BrowserRouter>
     
      <Navbar/>  
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/inicio" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoriaid" element={<ItemListContainer/>}/>
        <Route path="/detalle/:id" element={<ItemDetailsContainer/>}/>
        <Route path="/cart" element={<CartContainer/>}/>
        <Route path="*" element={<h5>Error 404 pagina no funciona</h5>}/>
       
      </Routes>
   
    </BrowserRouter>

    </CartProvider> 

  );
}


export default App;


