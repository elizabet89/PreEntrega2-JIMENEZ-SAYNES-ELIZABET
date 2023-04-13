import React from "react";
import Datos from "../data/products";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";



//================  FIREBASE   ========================
//=================================================================

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs } from "firebase/firestore";

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
const db= getFirestore(app)


async function getItems(){
  
  //traer todos los productos de una coleccion --> productos
  
  //1.- crear la referencia a la coleccion deseada
  const productosRef=collection(db,"productos")
  //2.-pedir los documentos
  const documents= await getDocs(productosRef)
  const productos=documents.docs
  //extraer los datos(.data())de los documentos
  const doctsData=productos.map(doc=> {
    return {id:doc.id, ...doc.data()}
  })
  console.log(doctsData)
  return doctsData
 
   
}
// getItems()
//=================================================================
//=================================================================








          // mocks async service
//=========================================
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(Datos);
//   }, 3000);
// });


function funcionCategory(categoriaURL) {
  const promesaCategory = new Promise((resolve, reject) => {
    setTimeout(() => {
      const filtro = Datos.filter((item) => item.categoria === categoriaURL);
      resolve(filtro);
    }, 1000);
  });
  return promesaCategory;
}

//==============================
function ItemListContainer(props) {
  //===========useState==================

  const [products, setProducts] = useState([]);
  const { categoriaid } = useParams();
  //===============================

  useEffect(() => {

    //NOTA IMPORTANTE CON LOS LLAMADOS A FIREBASE
    //SIEMPRE DEBEN ESTAR DENTRO DE UN USEEFFECT
    if (categoriaid === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      funcionCategory(categoriaid).then((respuesta) => {
        setProducts(respuesta);
      });
    }
  },[]);

  if(products.length=== 0){
    return  <Loader />
  }
  //=====================================================0

  //==============================================

  return (
    <section className="contenedor-principal">
      <ItemList products={products} />
    </section>
  );
}
export default ItemListContainer;
