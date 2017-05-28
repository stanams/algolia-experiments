import React from 'react'
import { SearchResultsListItem } from '../SearchResultsListItem/SearchResultsListItem.component'
import './SearchResultsList.component.css'

export const SearchResultsList = ({ results }) => {
  return (
    <ul className='result-list-container'>
      { results.hits &&
        Array.from(results.hits).map(movie => (
          <SearchResultsListItem key={movie.objectID} movie={movie}/>     
        ))
      }
    </ul>
  )   
}


