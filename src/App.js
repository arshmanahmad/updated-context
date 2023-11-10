import React, { useState } from 'react';
import CreateBook from './components/CreateBook';

const App = () => {
  const[book, setBook] = useState([]);
  const createBook = (title) =>{
    const updatedBooks = [...book,{id:123,title} ];
    setBook(updatedBooks)
  }
  return(
    <>
      {book.length}  
      <CreateBook onCreate = {createBook}/>
    </>
  )
}

export default App;
