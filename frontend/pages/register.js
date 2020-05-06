import React from 'react'
import { useTheme, Container } from '@material-ui/core'
import { MyTypography, Banner, UserFormCard } from '../components/app'

export default () => {
  const theme = useTheme()
  return (
    <Container>
      <UserFormCard/>
    </Container>
  )
}