import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import fetchApi from './reducers/fetchApi'

const store = createStore(
  fetchApi,
  applyMiddleware(thunk)
)

export default store