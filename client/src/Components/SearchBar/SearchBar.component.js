import React from 'react'
import { Icon } from 'semantic-ui-react'
import './SearchBar.component.css'

export const SearchBar = ({ query, handleInput }) => {
  return (
    <div className="search-bar">
      <Icon name="search" color='#1e2537' className="search-bar-icon"/>
      <input onChange={ handleInput }
             value={ query }
             className="search-bar-input"
             type="text"
             placeholder="Search by title: Titanic, Matrix..."/>
    </div>
  )   
}
