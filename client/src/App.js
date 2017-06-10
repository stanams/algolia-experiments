import React, { Component } from 'react'
import './App.css'
import {
  Header,
  SearchBar,
  SearchResultsList,
  AddMovieButton
} from './Components/index.components'
import AddMovieForm from './Components/AddMovieForm/AddMovieForm.component'
import Message from './Components/Message/Message.component'

import { connect } from 'react-redux'

import {
  searchMovies
} from './Actions/movies.actions'

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
        <Message/>
        <div className="search-container">
          <SearchBar query={ query } handleInput={ this.handleInput } />
          <AddMovieButton openForm={ this.openForm }/>
        </div>
        <SearchResultsList searchMovies={ this.props.searchMovies } query={ query } loading={ loading } results={ moviesList }/>
        { isFormOpen &&
          <AddMovieForm closeForm={ this.closeForm }/>
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
    searchMovies(query, page = 0) {
      dispatch(searchMovies(query, page))
    }
  }
}

export { App as PureApp };
export default connect(mapStateToProps, mapDispatchToProps)(App)
