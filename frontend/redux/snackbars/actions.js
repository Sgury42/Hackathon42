export function alert(code, variant) {
  return (dispatch, getState) => {
    dispatch(enqueueSnackbar(code, variant))
  }
}

export function enqueueSnackbar(message, variant) {
  return {
    type: 'ENQUEUE_SNACKBAR',
    notification: {
      key: new Date().getTime() + Math.random(),
      message,
      options: {
        variant
      }
    }
  }
}

export const closeSnackbar = key => ({
  type: 'CLOSE_SNACKBAR',
  dismissAll: !key, // dismiss all if no key has been defined
  key,
})

export const removeSnackbar = key => ({
  type: 'REMOVE_SNACKBAR',
  key
})
