import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: ({ italic, color }) => {
    if (['primary', 'secondary', 'tertiary', 'error', 'warning', 'info', 'success'].includes(color))
      color = theme.palette[color].main
    else if (['textPrimary', 'textSecondary', 'textTertiary'].includes(color))
      color = theme.palette.text[color.substring(4).toLowerCase()]
    return ({
      color,
      fontStyle: italic ? 'italic' : undefined
    })
  },
  regular: {
    fontWeight: theme.typography.fontWeightRegular
  },
  medium: {
    fontWeight: theme.typography.fontWeightMedium
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold
  }
}))

export default ({ bold, medium, italic, color, className, ...rest }) => {
  let fontWeight = bold ? 'bold' : medium ? 'medium' : 'regular'
  const classes = useStyles({ bold, italic, medium, color })

  return (
    <Typography className={[classes.root, classes[fontWeight], className].join(' ')} {...rest} />
  )
}