import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import './NavBar.scss';
import logo from '../img/UBorrow.jpg';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Username</p>
          <input className='userAcc' type='text'/>
          <p>Password</p>
          <input className='userAcc' type='password'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Link to="/profile"><Button variant="primary" onClick={handleClose}>
            Login
          </Button></Link>
        </Modal.Footer>
      </Modal>       
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
          </li>
          <br/>
          <li>
            <button class="button" onClick={handleShow}>Login</button>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
    </>
  )  
}

export default NavBar;