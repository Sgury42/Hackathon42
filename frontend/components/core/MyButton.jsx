import React from 'react'
import { makeStyles, ButtonBase } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: ({ fullWidth, disableElevation, disableHoverUp, elevation }) => ({
    width: fullWidth ? '100%' : undefined,
    transition: '.1s, width .3s',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamily,
    borderRadius: theme.shape.borderRadius,
    boxShadow: disableElevation ? 'none' : theme.shadows[elevation],
    '&:hover': {
      transform: disableHoverUp ? undefined : 'translateY(-2px)',
      '@media (hover: none)': {
        boxShadow: theme.insetShadows[0]
      },
    },
    '&:active': {
      transform: 'translateY(-2px) scale(.96)',
      boxShadow: theme.insetShadows[0]
    },
    '&:focus-visible': {
      background: 'pink'
    }
  }),
  // variants
  contained: ({ color }) => ({
    backgroundColor: color ? `${theme.palette[color].main}` : `${theme.palette.contrast.medium}`,
    color: color ? '#fff' : theme.palette.text.secondary,
  }),
  text: ({ color }) => !color ? undefined : ({
    backgroundColor: `${theme.palette.contrast.medium}`,
    color: `${theme.palette[color].main}`,
  }),
  colored: ({ color, disableElevation }) => !color ? undefined : ({
    backgroundColor: disableElevation ? theme.palette.contrast.medium : theme.palette.contrast.low ,
    color: `${theme.palette[color].main}`,
  }),
  // other
  medium: {
    padding: '8px 16px',
  },
  large: {
    padding: '10px 18px'
  },
  active: {
    boxShadow: theme.insetShadows[0] + ' !important'
  },
}))

export default ({ color, children, variant, size, fullWidth, active, disableElevation, disableHoverUp, elevation, ...rest }) => {
  // default values
  if (elevation === undefined) elevation = 0
  if (!size) size = 'medium'
  if (!variant) variant = 'contained'
  if (active) active = 'active'
  if (color === 'default') color = undefined

  const classes = useStyles({ color, fullWidth, disableElevation, disableHoverUp, elevation })
  if (!classes) return null

  return (
    <ButtonBase
      focusRipple
      className={[classes[variant], classes[size], classes[active], classes.root].join(' ')}
      {...rest}
    >
      {children}
    </ButtonBase>
  )
}