import movies from './movies.reducer'
import app from './app.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  movies,
  app
})

export default rootReducer