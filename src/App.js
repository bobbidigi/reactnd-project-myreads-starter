import React from 'react';
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import { Route } from 'react-router-dom';

import './App.css';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  } 

  render() {
    console.log(this.state.books);
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <MainPage
          />
          )} 
        />

        <Route exact path='/search' render={() => (
          <SearchPage
          books={this.state.books}
          moveShelf={this.moveShelf}
          />
          )} 
        />

      </div>
    )
  }
}

export default BooksApp
