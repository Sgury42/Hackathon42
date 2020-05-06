import React from 'react'
import { LinearProgress, useTheme, Toolbar } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default ({ withToolbar }) => {
  const theme = useTheme()
  const fetchs = useSelector(s => s.objects.fetchs)
  const isFetching = Object.keys(fetchs).length ? true : false
  if (!isFetching) return null
  return (
    <div style={{ top: 0, right: 0, left: 0, position: 'fixed', zIndex: theme.zIndex.appBar + 1 }}>
      {withToolbar && 
        <Toolbar/>
      }
      <LinearProgress color="primary" style={{ marginTop: 4 }}/>
    </div>
  )
}