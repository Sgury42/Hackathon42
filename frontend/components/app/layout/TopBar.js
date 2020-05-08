import React, { useEffect, useState } from 'react'
import { Toolbar, useTheme, AppBar, Container } from '@material-ui/core'
import { MyTypography, BlockLink } from '../../core'

export default ({ children }) => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <AppBar color="default">
        <Toolbar variant="dense">
          {/* <Container> */}
            <BlockLink href="/">
              <MyTypography variant="h6">Ants.ia</MyTypography>
            </BlockLink>
          {/* </Container> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}