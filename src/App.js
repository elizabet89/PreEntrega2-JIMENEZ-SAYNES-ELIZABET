
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <div className="App">
       <header className='contenedor-principal'>
            <h1 className='app-title'>Componente Navbar</h1>
            <Navbar/>
        </header>
        <ItemListContainer
          saludo='Primera Pre-Entrega con React'
        />
    </div>
  );
}

export default App;

