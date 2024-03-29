import React from "react";
import { Link } from 'react-router-dom';
import "./Home.scss";

import NavBar from './NavBar';

const Home = () => (
  <>
  <NavBar />
  <div className="home">
    <head>
      <title>Home Page</title>
    </head>
    <main>
      <Link to="./signup"><button>Start Here!</button></Link>
      <p>Get The Book You Need For School Today!</p>
    </main>
  </div>
  </>
);

export default Home;