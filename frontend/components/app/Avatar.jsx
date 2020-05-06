import React from 'react'
import { Avatar } from '@material-ui/core'

export default ({ user }) => {
  return (
    <Avatar>{user.firstname.charAt(0)}{user.lastname.charAt(0)}</Avatar>
  )
}