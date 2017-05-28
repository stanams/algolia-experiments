import React, { Component } from 'react'
import './App.css'
import { Header } from './Components/Header/Header.component'
import { SearchBar } from './Components/SearchBar/SearchBar.component'
import { SearchResultsList } from './Components/SearchResultsList/SearchResultsList.component'
import { AddMovieButton } from './Components/AddMovieButton/AddMovieButton.component'
import { AddMovieForm } from './Components/AddMovieForm/AddMovieForm.component'
import algoliasearch from 'algoliasearch'

const client = algoliasearch('J2ZJK8FEIS', '399b6ba8d0bf23ef41f3314ca025fa0a');
const index = client.initIndex('Movie');

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFormOpen: false,
      query: '',
      results: {}
    }
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.search = this.search.bind(this)
  }

  handleInput(e) {
    const query = e.target.value
    this.setState({ query: query })
    this.search(query)
  }

  search(query) {
    index.search(query, function searchDone(err, content) {
    if (err) {
      console.error(err)
      return
    }
    this.setState({ results: content })
    }.bind(this))
  }

  openForm() {
    this.setState({ isFormOpen: true })
  }

  closeForm() {
    this.setState({ isFormOpen: false })
  }

  render() {
    const { isFormOpen, query, results } = this.state
    return (
      <div className="App">
        <Header/>
        <div className="search-container">
          <SearchBar query={ query } handleInput={ this.handleInput } />
          <AddMovieButton openForm={ this.openForm }/>
        </div>
        <SearchResultsList results={ results }/>
        { isFormOpen &&
          <AddMovieForm closeForm={ this.closeForm }/>
        }
      </div>
    );
  }
}

export default App;
