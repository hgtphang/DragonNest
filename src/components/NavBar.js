import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import "./Style.css";
import {navItems} from './NavItems';
import Button from './Button';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src='' alt="Logo" />
      </Link>

      <ul className='nav-items'>
        {navItems.map((item) => {
          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <Button></Button>
    </nav>
  );
}

export default NavBar;
