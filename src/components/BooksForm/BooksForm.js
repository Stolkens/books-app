import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookRequest } from "../../redux/booksRedux";


const BooksForm = () =>{

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBookRequest({title, author}));
    setTitle('');
    setAuthor('');

  }


  return (
      <form onSubmit={handleSubmit}> 
        Title: <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        Author: <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
        <button >Add book</button>
      </form>
      
    );
  }


export default BooksForm;