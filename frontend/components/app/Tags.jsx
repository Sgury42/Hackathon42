import React from 'react'
import { Chip, Grid } from '@material-ui/core'

export default ({ tags, ...rest }) => {
  return (
    <Grid container spacing={1} {...rest}>
      {tags.map(tag => (
        <Grid item>
          <Chip label={tag.label} style={{ color: tag.color }}/>
        </Grid>
      ))}
    </Grid>
  )
}