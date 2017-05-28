import React, { Component } from 'react'
import './App.css'
import { Header } from './Components/Header/Header.component'
import { SearchBar } from './Components/SearchBar/SearchBar.component'
import { SearchResultsList } from './Components/SearchResultsList/SearchResultsList.component'
import { AddMovieButton } from './Components/AddMovieButton/AddMovieButton.component'
import { AddMovieForm } from './Components/AddMovieForm/AddMovieForm.component'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFormOpen: false
    }
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  openForm() {
    this.setState({ isFormOpen: true })
  }

  closeForm() {
    this.setState({ isFormOpen: false })
  }

  render() {
    const { isFormOpen } = this.state
    console.log(isFormOpen)
    return (
      <div className="App">
        <Header/>
        <div className="search-container">
          <SearchBar/>
          <AddMovieButton openForm={ this.openForm }/>
        </div>
        <SearchResultsList/>
        { isFormOpen &&
          <AddMovieForm closeForm={ this.closeForm }/>
        }
      </div>
    );
  }
}

export default App;
