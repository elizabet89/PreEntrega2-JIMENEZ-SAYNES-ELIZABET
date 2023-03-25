
import './App.css';
import ItemDetailsContainer from './componentes/ItemDetailsContainer';
// import ItemDetails from './componentes/ItemDetails';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    
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
  );
}


export default App;

