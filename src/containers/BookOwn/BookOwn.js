import React, { useState } from "react";

import './BookOwn.scss'

const list = [{id: 1, title: 'Harry Potter', author: 'J.K Rowling', edition: 0, isbn: '0'}]

const BookOwn = () => {
    const [item, setItem] = useState(list)
    const displayList = item.map(book => {
        return (
            <div className='row' key={book.id}>
                {book.title} {book.author}
                <button onClick={() => setItem(item.filter(oldBook => oldBook.id !== book.id))}>Remove</button>
            </div>
        )
    })
    return (
        <div>
            {displayList}
            <button onClick={() => setItem([...item, { id: Math.random(), title: 'Harry Potter', author: 'J.K Rowling', edition: 0, isbn: '0'}])}>Add Item</button>
        </div>
    )
}

export default BookOwn;