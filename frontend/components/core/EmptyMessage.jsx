import React from 'react'
import { MyTypography } from './'

export default ({ children }) => {
  return <MyTypography color="textSecondary" style={{ marginTop: 8 }} align="center">{children}</MyTypography>
}