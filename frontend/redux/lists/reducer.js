import _ from 'lodash'

const initialState = {}

const listsReducer = (state = initialState, action) => {
  const { type, listName, list, item, itemId, idField, field, desc } = action
  let filtered, sorted, edited, added
  switch(type) {
    case 'DELETE_LIST':
      return {
        ...state,
        [listName]: undefined
      }
    case 'SET_LIST':
      if (!_.isEqual(state[listName], list)) {
        console.log('set_list', listName)
        if (Array.isArray(list)) {
          return {
            ...state,
            [listName]: {
              data: list
            }
          }
        }
        return {
          ...state,
          [listName]: {
            ...list
          }
        }
      }
      break
    case 'MERGE_LIST':
      return {
        ...state,
        [listName]: {
          ...state[listName],
          ...list
        }
      }
    case 'DELETE_ITEM':
      if (!state[listName]) return state
      filtered = state[listName].data.filter(item => item._id != itemId)
      return {
        ...state,
        [listName]: {
          ...state[listName],
          data: filtered
        }
      }
    case 'UPDATE_ITEM':
      if (!state[listName]) return state
      edited = [...state[listName].data]
      for (let i in edited) {
        if (edited[i][idField] === item[idField]) {
          edited[i] = { ...edited[i], ...item }
        }
      }
      return {
        ...state,
        [listName]: {
          ...state[listName],
          data: edited
        }
      }
    case 'ADD_ITEM':
      if (!state[listName]) return state
      added = [...state[listName].data]
      added.unshift(item)
      console.log(added)
      return {
        ...state,
        [listName]: {
          ...state[listName],
          data: added
        }
      }
    case 'SORT_LIST':
      if (!state[listName]) return state
      if (desc)
        sorted = state[listName].data.sort((a, b) => a[field] < b[field])
      else
        sorted = state[listName].data.sort((a, b) => a[field] > b[field])
      return {
        ...state,
        [listName]: {
          ...state[listName],
          data: sorted,
        }
      }
    default:
      return state
  }
  return state
}

export default listsReducer
