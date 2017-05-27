import React from 'react'
import { Rating } from 'semantic-ui-react'
import './SearchResultsListItem.component.css'

export const SearchResultsListItem = ({movie}) => {
  return (
    <div className='list-item--content'>
      <span>Rating: <Rating icon='star' defaultRating={movie.rating} maxRating={5} /></span>
      <span>Genre: {JSON.parse(movie.genre)}</span>
    </div>
  )   
}