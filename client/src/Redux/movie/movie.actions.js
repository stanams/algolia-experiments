export const ADD_MOVIE = 'ADD_MOVIE'
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

export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const searchMovies = (query) => {
  return {
    type: DELETE_MOVIE,
    movies
  }
}