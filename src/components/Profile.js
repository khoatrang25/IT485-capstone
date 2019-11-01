import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import './Profile.scss'

import NavBar2 from './NavBar2';

import avatar from '../img/avatar.png';

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton1>
          <Modal.Title><h3>Books Own |</h3><p> Adding</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Book Name</p>
          <input type='text'/>
          <p>Author</p>
          <input type='text'/>
          <p>Edition</p>
          <input type='number'/>
          <p>*If the book does not have an edition, put 0</p>
          <p>ISBN</p>
          <input type='number'/>
          <p>*If the book does not have an ISBN, put 0</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <NavBar2/>
      <div className="profile">
        <div className='left'>
          <img className="avatar" src={avatar} alt="avatar"></img>
        <h5>Name</h5>
        </div>
        <br/>
        <p>Phone</p>
        <br/>
        <p className='info'>Email</p>
        <br/>
        <p>Dorm/Commute</p>
        <br/>
      </div>
      <div className="bookown">
        <h1>Books Own</h1>
      </div>
        <button class="button" onClick={handleShow}>Add</button>
    </div>
);
}

export default Profile;