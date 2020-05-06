import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import snackbars from './snackbars/reducer'
import lists from './lists/reducer'
import objects from './objects/reducer'


const defaultState = {}

// combine all reducers
const rootReducer = combineReducers({
  snackbars,
  lists, 
  objects,
})

let store = undefined

// create store
const makeStore = (initialState = defaultState) => {
  store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  return store
}


export {
  store, 
  makeStore
}