import React from 'react'
import { LinearProgress, useTheme, CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  colorPrimary: ({ backgroundColor }) => !backgroundColor ? undefined : ({
    backgroundColor: backgroundColor
  }),
  barColorPrimary: ({ barColor }) => !barColor ? undefined : ({
    backgroundColor: barColor
  }),
}))


export default ({ backgroundColor, barColor, variant, ...rest }) => {
  const classes = useStyles({ backgroundColor, barColor })
  return (
    <LinearProgress variant={variant} color="primary" {...rest} classes={classes}/>
  )
}