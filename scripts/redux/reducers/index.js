import { combineReducers } from 'redux'
import counter from './counter'
import text from './text'

const reducersCombined = combineReducers({
  counter,
  text
})

export default reducersCombined
