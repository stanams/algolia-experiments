import CONSTANTS from '../Core/constants'
import MoviesService from '../Services/movies.service'
import { debounce } from '../Core/utils'

export const searchMovies = (query) => {
  return (dispatch) => {
    dispatch({
      type: CONSTANTS.EVENT_TYPES.MOVIES.SEARCH_MOVIES_REQUEST
    })

    MoviesService.searchMovies(query)
      .then(debounce(movies => {
        dispatch({
          type: CONSTANTS.EVENT_TYPES.MOVIES.SEARCH_MOVIES_SUCCESS,
          movies
        })
      }, 250))
      .catch(() => {
        dispatch({
          type: CONSTANTS.EVENT_TYPES.MOVIES.SEARCH_MOVIES_FAILURE
        })
      })
  };
}

const ADD_MOVIE = 'ADD_MOVIE'
export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    movie
  }
}

export const DELETE_MOVIE = 'DELETE_MOVIE'
export const deleteMovie = (movieId) => {
  return {
    type: DELETE_MOVIE
  }
}