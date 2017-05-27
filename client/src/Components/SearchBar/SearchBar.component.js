import React from 'react'
import { Icon } from 'semantic-ui-react'
import './SearchBar.component.css'

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <Icon name="search" color="grey" className="search-bar-icon"/><input className="search-bar-input" type="text" placeholder="Search by title: Titanic, Matrix..."/>
    </div>
  )   
}