import axios from 'axios'
import { alert } from './snackbars/actions'
import Cookies from 'js-cookie'
import { setFetch, setList as setListAction, setObject as setObjectAction } from './actions'
import { store } from './store'
import { batch } from 'react-redux'

export default async (url, options) => {
  if (!options) options = {}
  let { method, body, query, fetchName, setList, setObject, parseFunction } = options
  if (!method) method = 'get'
  if (!parseFunction) parseFunction = x => x
  const token = store.getState().objects.auth.token || Cookies.get('Authorization')
  const headers = {}
  if (token)
    headers.Authorization = token
    
  if (fetchName)
    store.dispatch(setFetch(fetchName, true))
  try {
    const response = await axios({
      url: url.startsWith('http') ? url : 'http://localhost:3003' + url,
      method,
      params: query,
      data: body,
      headers
    })
    batch(() => {
      if (fetchName)
        store.dispatch(setFetch(fetchName, false))
      if (setList)
        store.dispatch(setListAction(setList, parseFunction(response.data)))
      if (setObject)
        store.dispatch(setObjectAction(setObject, parseFunction(response.data)))
    })
    if (setList || setObject)
      return { dispatch: store.dispatch, data: response.data }
    return response.data
  } catch (e) {
    batch(() => {
      if (e.response) {
        store.dispatch(alert(e.response.data, 'error'))
      } else {
        console.error(e)
        store.dispatch(alert('Erorr while fetching data', 'error'))
      }
      if (fetchName)
        store.dispatch(setFetch(fetchName, false))
    })
    return null
  }
}