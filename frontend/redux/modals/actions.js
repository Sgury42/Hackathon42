import { setObject, deleteObject } from '../actions'

export const createConfirmationModal = (onConfirm) => {
  return (dispatch) => {
    dispatch(setObject('confirmationModal', { onConfirm }))
  }
}

export const deleteConfirmationModal = () => {
  return (dispatch) => {
    dispatch(deleteObject('confirmationModal'))
  }
}
