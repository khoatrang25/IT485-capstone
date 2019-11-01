
import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './NavBar2.scss';
import logo from '../img/UBorrow.jpg';

const NavBar2 = () => {
    return (
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
                </li>
                <br/>
                <li>
                <Link to="/search"><button class="search">Search</button></Link>    
                </li>
                <br/>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar2;