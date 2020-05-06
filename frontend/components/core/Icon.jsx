import React from 'react'
import * as mdiIcons from '@mdi/js'
import { useTheme, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  icon: ({ size }) => ({
    width: '1em',
    height: '1em',
    display: 'inline-block',
    flexShrink: 0,
    fontSize: size,
    lineHeight: 0,
  })
}))

export default ({ name, color, size, ...rest}) => {
  if (!size) size = 24
  const classes = useStyles({ size })
  const theme = useTheme()
  const path = mdiIcons[name]
  return (
    <svg className={classes.icon} viewBox="0 0 24 24" fill={color ? theme.palette[color].main : 'currentColor'} {...rest}>
      <path d={path}/>
    </svg>
  )
}