import req from '../req'
import Cookies from 'js-cookie'
import { setObject, updateObject } from '../objects/actions'
import { alert } from '../snackbars/actions'

export const fetchToken = (query) => {
  return async (dispatch) => {
    const token = await req('/api/user/token', {
      query
    })
    if (token) {
      Cookies.set('Authorization', token)
      dispatch(setObject('auth', { token }))
      dispatch(fetchCurrentUser(true))
    } else {
      dispatch(setObject('auth', { logged: false }))
    }
  }
}

export const fetchCurrentUser = (welcome = false) => {
  return async (dispatch) => {
    const me = await req('/api/user/current')
    if (me) {
      dispatch(setObject('currentUser', me))
      dispatch(updateObject('auth', { logged: true }))
      if (welcome)
        dispatch(alert(`Bienvenue ${me.firstname}`, 'success'))
    } else {
      dispatch(setObject('auth', { logged: false }))
      Cookies.remove('Authorization')
    }
  }
}