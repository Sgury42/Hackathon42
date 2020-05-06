import React, { useState } from 'react'
import { useTheme, Button, Container } from '@material-ui/core'
import { MyTypography, AnimatedWhenVisible, Animated } from './'


export default ({ padding, animation, children, style, containerStyle, title }) => {
  const theme = useTheme()
  const [on, setOn] = useState(false)
  return (
    <div style={{
      ...style,
    }}>
      <Container style={{ ...containerStyle }}>
        {title &&
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: theme.spacing(4), marginTop: theme.spacing(1) }}>
            <AnimatedWhenVisible animation="fromLeft">
              <MyTypography variant="h3" align="center" style={{ marginBottom: theme.spacing(1.5), maxWidth: 600 }} medium>{title}</MyTypography>
            </AnimatedWhenVisible>
          </div>
        }
        {children}
      </Container>
    </div>
  )
}