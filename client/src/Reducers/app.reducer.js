import defaultState from '../Store/defaultState'
import CONSTANTS from '../Core/constants'

export default (state = defaultState.app, action) => {
  switch(action.type) {
    case CONSTANTS.EVENT_TYPES.MOVIES.SEARCH_MOVIES_REQUEST:
      return {...state, loading: true}

    case CONSTANTS.EVENT_TYPES.MOVIES.SEARCH_MOVIES_SUCCESS:
    case CONSTANTS.EVENT_TYPES.MOVIES.SEARCH_MOVIES_FAILURE:
      return {...state, loading: false}
    default:
      return state
  }
}