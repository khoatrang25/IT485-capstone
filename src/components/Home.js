import React from "react";
import { Link } from 'react-router-dom';
import "./Home.scss";

const Home = () => (
  <div>
    <head>
      <title>Home Page</title>
    </head>
    <body>
        <main>
          <Link to="./signup"><button>Start Here!</button></Link>
          <p>Get The Book You Need For School Today!</p>
        </main>
    </body>
  </div>
);

export default Home;