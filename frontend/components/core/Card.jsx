import React from 'react'
import { Card, useTheme, makeStyles} from '@material-ui/core'
import { Icon, MyTypography, Loading } from './'
import { Skeleton } from '@material-ui/lab'

export default ({ style, title, children, banner, padding, corner, iconName, loading, skeleton, ...rest }) => {
  const theme = useTheme()
  if (!padding) padding = 3
  return (
    <Card style={{ padding: theme.spacing(padding), position: 'relative', ...style }} {...rest}>
      {loading &&
        <Loading variant="query" style={{ position: 'absolute', top: 4, left: 0, right: 0 }}/>
      }
      {banner &&
        <div style={{ background: theme.palette.contrast.low, marginLeft: -theme.spacing(padding), marginRight: -theme.spacing(padding), marginTop: -theme.spacing(padding), marginBottom: theme.spacing(padding) }}>
          {banner}
        </div>
      }
      {(title || iconName || corner) &&
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: theme.spacing(padding), marginTop: -theme.spacing(1) }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: theme.spacing(1) }}>
            {iconName &&
              <Icon name="iconName" color="primary" style={{ marginRight: theme.spacing(.5) }}/>
            }
            {title &&
              <MyTypography variant="body1" medium>{title}</MyTypography>
            }
          </div>
          {corner && corner}
        </div>
      }
      {skeleton && loading ?
        <Skeleton variant="rect" width="100%" height={skeleton}/>
      :
        <div style={{ filter: loading ? 'blur(10px)' : undefined, transition: '.4s' }}>
          {children}
        </div>
      }
    </Card>
  )
}