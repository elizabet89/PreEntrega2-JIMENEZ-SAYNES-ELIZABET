
//================  FIREBASE   ========================
//=================================================================

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs,doc,getDoc,query,where,addDoc } from "firebase/firestore";
// import productos from '../data/products'

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


export async function getItems(){
  
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

export async function getSingleItem(idURL){
 
  const docRef = doc(db, "productos", idURL);
  const docSnap = await getDoc(docRef);
  return {id: docSnap.id, ...docSnap.data()}
  
}  

export async function funcionCategory(categoriaid){
 
  const productosRef=collection(db,"productos")
  const q= query(productosRef, where("categoria", "==",categoriaid))
   
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;
    const doscData = documents.map((doc)=>{
      return {id: doc.id, ...doc.data()}
    })
  
 return doscData


}
export async function createOrder(order){
   const collectionOrdersRef= collection(db,"orders")
   const response =await addDoc(collectionOrdersRef,order)
    return response.id
  }

  export async function exportData(){
    //productos del array

    // const collectionRef= collection(db,"productos")
    // for(let item of productos){
    //   const response =await addDoc(collectionRef, item)
    //   console.log( "producto exportado con Id +"response.id )
    // }
  }