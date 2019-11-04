import React from "react";
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import './Search.scss'

import NavBar2 from './NavBar2';


const Search = () => (
  <div>
    <NavBar2/>
      <div className='search'>
          <h3>Search For The Book You Need!</h3>
          <br/>
        <div className='left'>
          <p>Book Name</p>
          <input type='text'/>
          <p>Author</p>
          <input type='text'/>
        </div>
        <br/>
        <div className='right'>
          <p>Edition</p>
          <input type='text'/>
          <p>ISBN</p>
          <input type='text'/>
        </div>
          <br/>
          <input type='submit'/>
      </div>
      <div>
        <h3>Results</h3>
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </ButtonGroup>
      </div>
    </div>
);

export default Search;