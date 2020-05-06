import React from 'react'
import { makeStyles, Chip } from '@material-ui/core'
import { MyTypography } from './'
import Color from 'color'

// personnalized variants
const useStyles = makeStyles(theme => {
  return {
    contained: ({ color }) => ({
      backgroundColor: color ? theme.palette[color].main : undefined,
      color: '#fff'
    }),
    colored: ({ color }) => !color ? undefined : ({
      backgroundColor: theme.palette[color].extraLight,
      color: theme.palette[color].main,
    }),
  }
})

export default ({ color, variant, className, ...rest }) => {
  const classes = useStyles({ color })

  return (
    <Chip {...rest} className={`${classes[variant]} ${className}`}/>
  )
}