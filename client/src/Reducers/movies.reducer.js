import defaultState from '../Store/defaultState'
import CONSTANTS from '../Core/constants'

export default (state = defaultState.movies, action) => {
  switch(action.type) {
    case CONSTANTS.EVENT_TYPES.MOVIES.SEARCH_MOVIES_SUCCESS:
      return {...state, list: action.movies}
    default:
      return state
  }
}