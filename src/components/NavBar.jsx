import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar__Container">
        <div className="NavBar__Logo">
          <Link to="/" className='NavBar__Title'>ViajandoJuntos.</Link>
        </div>
        <ul className="NavLinkContainer">
          <li className="NavItem">
              <Link to="/" className='NavLink'>Home</Link>
          </li>
          <li className="NavItem">
            <Link to="/foro" className='NavLink'>Foro</Link>
          </li>
          <li className="NavItem">
            <Link to="/Flight-Booking" className='NavLink'>Planifica</Link>
          </li>
          <li className="NavItem">
            <a href="https://ayrtonto.github.io/IHC-CC51_Grupo01/" className='NavLink' target="_blank">About Us</a>
          </li>
          <li className="NavItem">
            <Link to="/login" className='NavLink'>Ingresa</Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </nav>
  );
};

export default NavBar;
