import React, { Component } from 'react'
import './App.css'
import {
  Header,
  SearchBar,
  SearchResultsList,
  AddMovieButton,
  AddMovieForm
} from './Components/index.components'

import { connect } from 'react-redux'

import {
  searchMovies
} from './Actions/movies'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFormOpen: false,
      query: ''
    }
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    const query = e.target.value
    this.setState({ query: query })
    this.props.searchMovies(query)
  }

  openForm() {
    this.setState({ isFormOpen: true })
  }

  closeForm() {
    this.setState({ isFormOpen: false })
  }

  render() {
    const { isFormOpen, query } = this.state
    const { loading, moviesList } = this.props

    return (
      <div className="App">
        <Header/>
        <div className="search-container">
          <SearchBar query={ query } handleInput={ this.handleInput } />
          <AddMovieButton openForm={ this.openForm }/>
        </div>
        <SearchResultsList loading={ loading } results={ moviesList }/>
        { isFormOpen &&
          <AddMovieForm addMovie={ this.props.action.addMovie } addcloseForm={ this.closeForm }/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    moviesList: state.movies.list,
    loading: state.app.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies(query) {
      dispatch(searchMovies(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
