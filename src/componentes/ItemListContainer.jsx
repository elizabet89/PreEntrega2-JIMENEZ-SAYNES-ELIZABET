import React from "react";
import Datos from "../data/products";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

// mocks async service
//=========================================
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(Datos);
  }, 3000);
});

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
  //==useState==================

  const [products, setProducts] = useState([]);
  const { categoriaid } = useParams();

  useEffect(() => {
    if (categoriaid === undefined) {
      promesa.then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      funcionCategory(categoriaid).then((respuesta) => {
        setProducts(respuesta);
      });
    }
  });

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
