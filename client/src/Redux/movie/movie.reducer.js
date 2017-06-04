import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIES
} from './movie.actions'

export default (state = [], payload) => {
  switch(payload.type) {
    case SEARCH_MOVIES:
      return [...state, payload.hits]
    case ADD_MOVIE:
      return [...state, payload.hits]
    case DELETE_MOVIE:
      return [...state, payload.hits]
    default:
      return state
  }
}