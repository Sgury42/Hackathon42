import React from 'react'
import { useTheme, Container } from '@material-ui/core'
import { MyTypography, Banner, UserFormCard } from '../components/app'

export default () => {
  const theme = useTheme()
  return (
    <Container>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <UserFormCard/>
      </div>
    </Container>
  )
}