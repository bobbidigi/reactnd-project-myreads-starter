import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI'

class MainPage extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  } 

  render(){
    console.log(this.props.books);
      return(
      <div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf 
                books={this.state.books}
                moveShelf={this.moveShelf}
            />
          </div>
          <div className="open-search">
              <Link
                to='/search'
              >
                Add a book
              </Link>
          </div>
      </div>
      );
  }
}
export default MainPage;
