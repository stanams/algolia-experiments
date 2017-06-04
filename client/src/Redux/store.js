import { createStore } from 'redux'
import rootReducer from './movie/index'

export default (initialState) => {
  return createStore(rootReducer, initialState)
}