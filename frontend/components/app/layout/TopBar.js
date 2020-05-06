import React, { useEffect, useState } from 'react'
import { Toolbar, useTheme, AppBar } from '@material-ui/core'
import { MyTypography } from '../../core'

export default ({ children }) => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <AppBar color="default">
        <Toolbar variant="dense">
          <MyTypography medium>Hackaton</MyTypography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}