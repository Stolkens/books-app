import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeBookRequest } from "../../redux/booksRedux";


const BooksList = () =>  {

  const books = useSelector(state => state.books)

  const dispatch = useDispatch();
  const handleClick = book => {
    dispatch (removeBookRequest(book.id))
  }

    return (
      <div>
        <h2>BooksList</h2>
        <ul>
          {books.map(book =><li key={book.id}>{book.title} by {book.author}
          <button onClick={() => handleClick(book)}>Remove</button></li>)}
        </ul>
      </div>
    );
  }


export default BooksList;