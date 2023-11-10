import React, { useState } from 'react';

const CreateBook = ({onCreate}) => {
    const [title, setTitle] = useState('');
    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(title);

    } 
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Input Title</label>
            <input placeholder='Enter the title' onChange={handleChange} value={title}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateBook;