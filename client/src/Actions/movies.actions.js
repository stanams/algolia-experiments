import CONSTANTS from '../Core/constants'
import MoviesService from '../Services/movies.service'
import { debounce } from '../Core/utils'
import { setMessage } from './app.actions'

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

export const addMovie = (movie) => {
  return (dispatch) => {
    dispatch({
      type: CONSTANTS.EVENT_TYPES.MOVIES.ADD_MOVIE_REQUEST
    })

    MoviesService.addMovie(movie)
      .then(movie => {
        dispatch({
          type: CONSTANTS.EVENT_TYPES.MOVIES.ADD_MOVIE_SUCCESS,
          movie
        })

        dispatch(setMessage('The new movie has been created!'))
      })
      .catch(() => {
        dispatch({
          type: CONSTANTS.EVENT_TYPES.MOVIES.ADD_MOVIE_FAILURE
        })
      })

  }
}

export const DELETE_MOVIE = 'DELETE_MOVIE'
export const deleteMovie = (movieId) => {
  return {
    type: DELETE_MOVIE
  }
}