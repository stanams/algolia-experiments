import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Reducers'
import reduxThunk from 'redux-thunk'

export default createStore(
  rootReducer,
  applyMiddleware(reduxThunk)  
)
