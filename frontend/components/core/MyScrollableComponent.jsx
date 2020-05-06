import React from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

export default ({ xHidden, yHidden, ...rest }) => {
  return (
    <OverlayScrollbarsComponent {...rest}
      options={{
        overflowBehavior: {
          x: xHidden ? 'hidden': undefined,
          y: yHidden ? 'hidden': undefined,
        },
        className: 'os-theme-thin-dark'
      }}
    />
  )
}