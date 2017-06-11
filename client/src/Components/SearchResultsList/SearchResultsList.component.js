import React from 'react'
import PropTypes from 'prop-types'
import SearchResultsListItem from '../SearchResultsListItem/SearchResultsListItem.component'
import './SearchResultsList.component.css'
import { Pagination } from '../Pagination/Pagination.component'

export const SearchResultsList = ({ results, loading, query, searchMovies }) => {
  return (
    <div>
      {
        (results.hits && !loading) && 
        <Pagination active={ results.page } 
                    from={ results.page < 4 ? 0 : results.page - 4 }
                    to={ results.page < 4 ? 9 : results.page + 4 }
                    onClick={ page => searchMovies(query, page) }
        />
      }
      <h3 className='loading__element'>{ loading ? 'Loading...' : '' }</h3>
      {
        results.hits &&
      <ul className='result-list-container'>
        {
          Array.from(results.hits).map(movie => (
            <SearchResultsListItem from='result-list' id={ movie.objectID } key={ movie.objectID } movie={ movie }/>     
          ))
        }
      </ul>
      }
      {
        (results.hits && !loading) && 
        
        <Pagination active={ results.page } 
                    from={ results.page < 4 ? 0 : results.page - 4 }
                    to={ results.page < 4 ? 9 : results.page + 4 }
                    onClick={ page => searchMovies(query, page) } 
        />
      }
    </div>
  )
}

SearchResultsList.propTypes = {
  results: PropTypes.object
}