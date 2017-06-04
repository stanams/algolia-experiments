import React from 'react'
import PropTypes from 'prop-types'
import './SearchBar.component.css'

export const SearchBar = ({ query, handleInput }) => {

  return (
    <div className="search-bar">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input onChange={ handleInput }
             value={ query }
             className="search-bar-input"
             type="text"
             placeholder="Search by title: Titanic, Matrix..."/>
    </div>
  )   
}

SearchBar.propTypes = {
  query: PropTypes.string,
  handleInput: PropTypes.func.isRequired
}