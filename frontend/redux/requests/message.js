import req from '../req'
import { alert } from '../snackbars/actions'
import { batch } from 'react-redux'
import { setFetch, setObject, setList, deleteItem} from '../actions'

export const createMessage = (body) => {
  return async (dispatch) => {
    const message = await req(`/api/message`, {
      method: 'post',
      fetchName: 'post_message',
      body
    })
    if (message)
      dispatch(alert('Message envoyé. Vous receverez une reponse sous 48h', 'success'))
  }
}

export const getMessages = (query) => {
  return async (dispatch) => {
    const messages = await req(`/api/messages`, {
      query,
      fetchName: 'get_messages'
    })
    if (messages)
      dispatch(setList('messages', messages))
  }
}

export const getMessage = (query) => {
  return async (dispatch) => {
    const message = await req(`/api/message`, {
      query,
      fetchName: 'get_message'
    })
    if (message)
      dispatch(setObject('message', message))
  }
}

export const deleteMessage = (body) => {
  return async (dispatch) => {
    const message = await req(`/api/message`, {
      method: 'delete',
      body,
      fetchName: 'delete_message'
    })
    if (message) {
      dispatch(alert('Message supprimé', 'success'))
      dispatch(deleteItem('messages', message._id))
      //dispatch(setObject('message', message))
    }
  }
}