import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

import logo from '../img/UBorrow.jpg';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
      </li>
      <li>
        Forgot your password?
      </li>
      <li>
        <Link to="./signup"><button>Login</button></Link>
      </li>
    </ul>
    <br/>
  </nav>
);

export default NavBar;