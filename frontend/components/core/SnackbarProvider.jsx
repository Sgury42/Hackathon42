import { SnackbarProvider } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack';
import { removeSnackbar } from '../../redux/snackbars/actions'
import { IconButton } from '@material-ui/core'
import { Close } from 'mdi-material-ui'
import React from 'react'

export default ({ children }) => {
  
  const dispatch = useDispatch()

  return (
    <SnackbarProvider maxSnack={3}>
      <Notifier/>
      {children}
    </SnackbarProvider>
  )
}

let displayed = []

const Notifier = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(s => s.snackbars.notifications || [])
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const storeDisplayed = (id) => {
    displayed = [...displayed, id]
  }

  const removeDisplayed = (id) => {
    displayed = [...displayed.filter(key => id !== key)]
  }

  React.useEffect(() => {
    notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key)
        return
      }

      // do nothing if snackbar is already displayed
      if (displayed.includes(key)) return

      // display snackbar using notistack
      enqueueSnackbar(message, {
        key,
        action: key => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close/>
          </IconButton>
        ),
        ...options,
        onClose: (event, reason, myKey) => {
          if (options.onClose) {
            options.onClose(event, reason, myKey)
          }
        },
        onExited: (event, myKey) => {
          // removen this snackbar from redux store
          dispatch(removeSnackbar(myKey))
          removeDisplayed(myKey)
        },
      })

      // keep track of snackbars that we've displayed
      storeDisplayed(key)
    })
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch])

  return null
}
