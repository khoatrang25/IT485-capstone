import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import './NavBar.scss';
import logo from '../img/UBorrow.jpg';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
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
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton1>
          <Modal.Title>Forgot Your Password?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter Your Email</p>
          <input  className='userAcc' type='email' required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
          </li>
          <li>
            <button class="button1" onClick={handleShow1}>Forgot your password?</button>
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