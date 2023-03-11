import React from 'react';
import logotipo from '../imagenes/logotipo.png'
import '../estilos/Navbar.css'
import CardWidget from './CardWidget';
function Navbar(){
  return(

    <nav className='navbar'>

      <img src={logotipo} className='navbar-img' alt='logotipo'/>
      <ul className='nav-list'>
        <li>
          <a className='nav-link' href='./'>Nike</a>
          <a className='nav-link' href='./'>Sketchers</a>
          <a className='nav-link' href='./'>Pumas</a>
          <a className='nav-link' href='./'>Adidas</a>
        </li>
      </ul>
      <CardWidget/>
    </nav>

  );

};
export default Navbar;