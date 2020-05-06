import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dialog, Grid, DialogActions, DialogTitle, DialogContent } from '@material-ui/core'
import { MoreIcon, Card, MyButton, MyTypography } from './'
import { deleteConfirmationModal } from '../../redux/actions'

export default ({ name, open, onClose }) => {
  const modal = useSelector(s => s.objects.confirmationModal)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(deleteConfirmationModal('confirmationModal'))
  }

  return (
    <Dialog
      open={modal ? true : false}
      //TransitionComponent={Transition}
      //keepMounted
      fullWidth
      onClose={handleClose}
    >
      <DialogTitle>Etes-vous sûr ?</DialogTitle>
      <DialogContent>Cette action est irreversible</DialogContent>
      <DialogActions>
        <MyButton variant="contained" onClick={handleClose}>Annuler</MyButton>
        <MyButton variant="contained" color="error" onClick={() => [handleClose(), modal.onConfirm()]}>Confirmer</MyButton>
      </DialogActions>
    </Dialog>
  )
}