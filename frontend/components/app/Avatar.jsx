import React from 'react'
import { Avatar, Tooltip } from '@material-ui/core'

let COLORS = ['#7cb342', '#3f51b5', '#7e57c2', '#4caf50', '#f44336', '#ff5722', '#42a5f5']
export default ({ user, size }) => {
  return (
    <Tooltip title={`${user.firstname} ${user.lastname}`}>
      <Avatar style={{
        backgroundColor: COLORS[(user.firstname.charCodeAt(0) + user.lastname.charCodeAt(0)) % COLORS.length],
        height: size,
        width: size,
        fontSize: size && size - 14
      }}>
        {user.firstname.charAt(0)}{user.lastname.charAt(0)}
      </Avatar>
    </Tooltip>
  )
}