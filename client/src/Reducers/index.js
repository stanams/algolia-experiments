import movies from './movies'
import app from './app'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  movies,
  app
})

export default rootReducer