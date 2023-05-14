import BooksList from "./components/BookList/BooksList";
import BooksForm from "./components/BooksForm/BooksForm";
import { fetchBooks } from "./redux/booksRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchBooks()), [dispatch]);

  return (
    <div>
      <h1>Books App</h1>
      <BooksList />
      <BooksForm />
    </div>
 
  );
};

export default App;
