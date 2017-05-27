import React, { Component } from 'react'
import './App.css'
import { Header } from './Components/Header/Header.component'
import { SearchBar } from './Components/SearchBar/SearchBar.component'
import { SearchResultsList } from './Components/SearchResultsList/SearchResultsList.component'
import { AddMovieButton } from './Components/AddMovieButton/AddMovieButton.component'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="search-container">
          <SearchBar/>
          <AddMovieButton/>
        </div>
        <SearchResultsList/>
      </div>
    );
  }
}

export default App;
