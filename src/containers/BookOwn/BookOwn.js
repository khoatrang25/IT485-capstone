import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import './BookOwn.scss'

const list = []

const BookOwn = () => {
    const [item, setItem] = useState(list)
    const [show, setShow] = useState(false)
    const [book, setBook] = useState({title: '', author: '', edition: null, isbn: '', id: Math.random()})
    const [error, setError] = useState(false)
    const displayList = item.map(book => {
        return (
            <div className='row' key={book.isbn}>
                {book.title} {book.author} {book.edition} {book.isbn}
                <button onClick={() => setItem(item.filter(sameBook => sameBook.id !== book.id))}>Remove</button>
            </div>
        )
    })

    //Close and reset all input fields
    const handleClose = () => setShow(false) && setBook({title: '', author: '', edition: null, isbn: '', id: Math.random()}) && setError(false)

    //copy the old list of books and add the new book in
    const onChange = (e) => {
        const copyBook = {}
        console.log(e)
        copyBook[e.target.name] = e.target.value
        setBook({...book, ...copyBook}) 
    }

    //Submit Button
    const submitBtn = () => {
        //return null if one of the fields' input are empty
        if (
            (!book.title || !book.author || !book.edition || !book.isbn)
        ) {
            setError(true)    
            return null;
        }
        setError(false)
        setItem([...item, book])
        setBook({title: '', author: '', edition: null, isbn: '', id: Math.random()})
        handleClose()
    }


    return (
        <div>
            <h1>Books Own</h1>
            <button className='add' onClick={() => setShow(true)}>Add Book</button>
            <br/>
            <div className='list'>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton1>
                <Modal.Title><h3>Books Own |</h3><p> Adding</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <p className='error'>*Please fill out all of the requirements*</p>}
                    <p className='input'>Book Name</p>
                    <input type='text' name='title' onChange={onChange}/>
                    <p className='input'>Author</p>
                    <input type='text' name='author' onChange={onChange}/>
                    <p className='input'>Edition</p>
                    <input type='number' name='edition' min='0' onChange={onChange}/>
                    <p>*If the book does not have an edition, put 0</p>
                    <p className='input'>ISBN (10-13 digits)</p>
                    <input type='text'  name='isbn' min='0' maxLength='13' onChange={onChange}/>
                    <p>*If the book does not have an ISBN, insert 0</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={submitBtn}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BookOwn;