import BooksList from "./components/BookList/BooksList";
import BooksForm from "./components/BooksForm/BooksForm";
import shortid from "react";
import React from "react";



class App extends React.Component {

  state = {
    books: [
      {id:1, title:'Lords of the ring', author: 'JRR Tolkien'},
      {id:2, title:'Hobbit', author: 'JRR Tolkien'},
      {id:3, title:'Magiczne drzewo', author: 'Andrzej Maleszka'}
    ]
  }


  removeBook = bookId => {
    this.setState({ books: this.state.books.filter(book => book.id !== bookId)}) // filters przechodzi po tablicy i zwraca wszystkie ksiazki ktore ma id różne od bookId, dzieki temu dostaniemy nową tablicę bez ksiązki której id podamy w argumencie
  };

  addBook = newBook => {
    this.setState({ books:[...this.state.books, {id:shortid, title:newBook.title, author:newBook.author}] })
  }

  render () {
    const { books } = this.state;
    const { addBook, removeBook } = this;

    return (
      <div>
        <h1>Books App</h1>
        <BooksList books={books} removeBook={removeBook} />
        <BooksForm addBook={addBook} />
      </div>
   
    );
  }
  
};

export default App;
