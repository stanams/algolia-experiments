import React, { Component } from 'react'
import './App.css'
import { Header } from './Components/Header/Header.component'
import { SearchBar } from './Components/SearchBar/SearchBar.component'
import { SearchResultsList } from './Components/SearchResultsList/SearchResultsList.component'
import { AddMovieButton } from './Components/AddMovieButton/AddMovieButton.component'
import { AddMovieForm } from './Components/AddMovieForm/AddMovieForm.component'
import InfiniteScroll from 'react-infinite-scroller'
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
      // meta: {}
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

  // il faut simplement balancer les hits au composant ResultList et pas l'objet entier
  // de même pour le state de l'app

  search(query, page = 0) {
    index.search({
      query,
      page
    }, function searchDone(err, content) {
    if (err) {
      console.error(err)
      return
    }

    // if (page > 0) {
    //   const results = Object.assign({}, this.state.results, { content: content.hits })
    //   this.setState({ results })
    //   console.log(this.state.results)
    // } else {
    //   this.setState({ results: content.hits, meta: content })
    // }
    this.setState({ results: content })
    console.log(this.state.results)
    }.bind(this))
  }

  openForm() {
    this.setState({ isFormOpen: true })
  }

  closeForm() {
    this.setState({ isFormOpen: false })
  }

  remainPages = () => {
    return this.state.results.nbPages > this.state.results.page
  }

  // loadFunc = (currentPage, query) => {
  //   const nextPage = currentPage + 1
  //   this.remainPages() && debounce(this.search(query, nextPage), 1000)
  // }

  // debounce = (func, wait, immediate) => {
  //   let timeout
  //   return function() {
  //     let context = this
  //     let args = arguments
  //     let later = function() {
  //       timeout = null
  //       if (!immediate) {
  //         func.apply(context, args)
  //       }
  //     }
  //     let callNow = immediate && !timeout
  //     clearTimeout(timeout)
  //     timeout = setTimeout(later, wait)
  //     if (callNow) {
  //       func.apply(context, args)
  //     }
  //   }
  // }

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

/*
 <InfiniteScroll pageStart={ 0 }
                        loadMore={ () => this.loadFunc(results.page, query) }
                        hasMore={ this.remainPages() }
                        loader={ <div style={{textAlign: 'center', color: '#22b9b6'}}>Loading ...</div> }
                        useWindow>
                        </InfiniteScroll>*/