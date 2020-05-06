import { updateObject, setObject } from "../objects/actions"

export const setFetch = (name, value = true) => {
  return (dispatch, getState) => {
    if (value === true)
      dispatch(updateObject('fetchs', { [name]: value }))
    else {
      let { fetchs } = getState().objects
      let cpy = { ...fetchs }
      delete cpy[name]
      dispatch(setObject('fetchs', cpy))
    }
  }
}