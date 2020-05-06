import React, { useState } from 'react'
import { IconButton, Menu, MenuItem, Dialog, Grid, DialogActions, DialogTitle, DialogContent, useTheme, ListItemIcon } from '@material-ui/core'
import { Icon, Card, Button, ConfirmationModal, MyTypography } from './'
import { useDispatch } from 'react-redux'
import { createConfirmationModal } from '../../redux/actions'

export default ({ actions }) => {
  const [anchor, setAnchor] = useState(null)
  const dispatch = useDispatch()
  const theme = useTheme()

  const handleClose = () => {
    setAnchor(null)
  }
  actions = actions.filter(action => action.display !== false)

  return (
    <React.Fragment>
      <IconButton onClick={e => setAnchor(e.currentTarget)}>
        <Icon name="mdiPlus"/>
      </IconButton>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}
        keepMounted
      >
        {actions.map((action, i) => {
          return (
            <MenuItem
              key={i}
              onClick={() => {
                handleClose()
                action.confirmation ? dispatch(createConfirmationModal(action.onClick)) : action.onClick()
              }}
            >
              {action.Icon && 
                <ListItemIcon>
                  <action.Icon/>
                </ListItemIcon>
              }
              {action.label}
            </MenuItem>
          )
        })}
      </Menu>
    </React.Fragment>
  )
}