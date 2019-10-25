import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Example from './Example';

import './NavBar.scss';
import logo from '../img/UBorrow.jpg';

const NavBar = () => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <div>
      {loginModal && <Example/>}
      <nav>
        <ul>
          <li>
            <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
          </li>
          <li><Link to="/example">example</Link></li>
          <li>
            Forgot your password?
          </li>
          <br/>
          <li>
            <button id="modal-btn" class="button" onClick={() => setLoginModal(!loginModal)}>Login</button>
          </li>
        </ul>
      </nav>
    </div>
  )  
}

export default NavBar;