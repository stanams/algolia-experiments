import React from 'react'
import PropTypes from 'prop-types'
import { SearchResultsListItem } from '../index.components'
import './SearchResultsList.component.css'

export const SearchResultsList = ({ results, loading }) => {
  return (
    <div>
      <h3 className='loading__element'>{ loading ? 'Loading...' : '' }</h3>
      {
        results.hits &&
      <ul className='result-list-container'>
        {
          Array.from(results.hits).map(movie => (
            <SearchResultsListItem from='result-list' key={movie.objectID} movie={movie}/>     
          ))
        }
      </ul>
      }
    </div>
  )
}

SearchResultsList.propTypes = {
  results: PropTypes.object
}