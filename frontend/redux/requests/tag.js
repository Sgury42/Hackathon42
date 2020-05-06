import req from '../req'
import { setList, deleteItem, updateItem, addItem, alert } from '../actions'

export const getTags = (query) => {
  return async (dispatch) => {
    const tags = await req(`/api/tags`, {
      query,
      fetchName: 'tags'
    })
    if (tags)
      dispatch(setList('tags', tags))
  }
}

export const createTag = (body) => {
  return async (dispatch) => {
    const tag = await req(`/api/tag`, {
      body,
      method: 'post',
      fetchName: 'createTag'
    })
    if (tag) {
      dispatch(addItem('tags', tag))
      dispatch(alert('Tag créé', 'success'))
    }
  }
}

export const updateTag = (body) => {
  return async (dispatch) => {
    const tag = await req(`/api/tag`, {
      body,
      method: 'put',
      fetchName: 'updateTag'
    })
    if (tag) {
      dispatch(updateItem('tags', tag))
      dispatch(alert('Tag mis à jour', 'success'))
    }
  }
}

export const deleteTag = (body) => {
  return async (dispatch) => {
    const tag = await req(`/api/tag`, {
      body,
      method: 'delete',
      fetchName: 'deleteTag'
    })
    if (tag) {
      dispatch(deleteItem('tags', tag))
      dispatch(alert('Tag supprimé', 'success'))
    }
  }
}

