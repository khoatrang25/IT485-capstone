import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import './BookOwn.scss'

const list = [{title: 'Harry Potter', author: 'J.K Rowling', edition: 0, isbn: '0'}]

const BookOwn = () => {
    const [item, setItem] = useState(list)
    const [show, setShow] = useState(false)
    const [book, setBook] = useState({title: '', author: '', edition: null, isbn: ''})
    const [error, setError] = useState(false)
    const displayList = item.map(book => {
        return (
            <div className='row' key={book.isbn}>
                {book.title} {book.author} {book.edition} {book.isbn}
                <button onClick={() => setItem(item.filter(sameBook => sameBook.isbn !== book.isbn))}>Remove</button>
            </div>
        )
    })

    const handleClose = () => setShow(false) && setBook({title: '', author: '', edition: null, isbn: ''}) && setError(false)

    const onChange = (e) => {
        const copyBook = {}
        copyBook[e.target.name] = e.target.value
        setBook({...book, ...copyBook}) 
    }

    const submitBtn = () => {
        if (
            (!book.title || !book.author || !book.edition || !book.isbn)
        ) {
            setError(true)    
            return null;
        }
        setError(false)
        setItem([...item, book])
        setBook({title: '', author: '', edition: null, isbn: ''})
        handleClose()
    }

    console.log(book)

    return (
        <div>
            {displayList}
            <button onClick={() => setShow(true)}>Add Item</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton1>
                <Modal.Title><h3>Books Own |</h3><p> Adding</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <p>*Please fill out all of t</p>}
                <p>Book Name</p>
                <input type='text' name='title' onChange={onChange}/>
                <p>Author</p>
                <input type='text' name='author' onChange={onChange}/>
                <p>Edition</p>
                <input type='number' name='edition' onChange={onChange}/>
                <p>*If the book does not have an edition, put 0</p>
                <p>ISBN</p>
                <input type='text' name='isbn' onChange={onChange}/>
                <p>*If the book does not have an ISBN, put 0</p>
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