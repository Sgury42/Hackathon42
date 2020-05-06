import React, { useEffect, useState } from 'react'
import { Toolbar, useTheme, AppBar } from '@material-ui/core'
import { MyTypography, BlockLink } from '../../core'

export default ({ children }) => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <AppBar color="default">
        <Toolbar variant="dense">
          <BlockLink href="/">
            <MyTypography variant="h6" medium>P2P Coaching</MyTypography>
          </BlockLink>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}