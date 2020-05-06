import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import snackbars from './snackbars/reducer'
import lists from './lists/reducer'
import objects from './objects/reducer'


const defaultState = {
  objects: {
    // la les truc genre group (sans s)
  },
  lists: {
    tags: {
      data: [
        { label: 'Summer Body', color: '#ff9800' },
        { label: 'ReactJs', color: '#2196f3' },
        { label: 'Javascript', color: '#ffc107' },
        { label: 'C', color: '#424242' },
        { label: 'C++', color: '#222' },
      ]
    },
    groups: {
      data: [
        {
          name: 'Javascript coders',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }],
          tags: [{ label: 'ReactJs', color: '#2196f3' }, { label: 'Javascript', color: '#ffc107' }]
        },
        {
          name: 'Javascript coders',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }],
          tags: [{ label: 'ReactJs', color: '#2196f3' }, { label: 'Javascript', color: '#ffc107' }]
        },
        {
          name: 'Javascript coders',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }],
          tags: [{ label: 'ReactJs', color: '#2196f3' }, { label: 'Javascript', color: '#ffc107' }]
        },
        {
          name: 'Javascript coders',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis varius mi iaculis venenatis. Nulla sed orci felis. Fusce euismod nisl turpis, nec aliquet turpis lobortis in.',
          users: [{ firstname: 'John', lastname: 'Doe' }, { firstname: 'Sarah', lastname: 'Gury' }],
          tags: [{ label: 'ReactJs', color: '#2196f3' }, { label: 'Javascript', color: '#ffc107' }]
        },
      ]
    }
  }
}

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