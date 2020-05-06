export const setList = (listName, list) => {
  return {
    type: 'SET_LIST',
    listName,
    list
  }
}

export const deleteItem = (listName, item) => {
  return {
    type: 'DELETE_ITEM',
    itemId: item._id,
    listName
  }
}

export const updateItem = (listName, item, idField = '_id') => {
  return {
    type: 'UPDATE_ITEM',
    item,
    listName,
    idField
  }
}

export const updateList = (listName, list) => {
  return {
    type: 'UPDATE_LIST',
    listName,
    list
  }
}

export const addItem = (listName, item) => {
  return {
    type: 'ADD_ITEM',
    item,
    listName
  }
}

export const mergeList = (listName, list) => {
  return {
    type: 'MERGE_LIST',
    list,
    listName
  }
}

export const deleteList = (listName) => {
  return {
    type: 'DELETE_LIST',
    listName
  }
}

export const sortList = (listName, field, desc) => {
  return {
    type: 'SORT_LIST',
    listName,
    field,
    desc
  }
}