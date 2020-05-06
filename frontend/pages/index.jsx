import React from 'react'
import { useTheme } from '@material-ui/core'
import { MyTypography, Banner } from '../components/core'

export default () => {
  const theme = useTheme()
  return (
    <div>
      <Banner style={{ padding: '60px 0' }}>
        <MyTypography variant="h1" align="center">Hello world ^^</MyTypography>
      </Banner>
    </div>
  )
}