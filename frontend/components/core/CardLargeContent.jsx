import React from 'react'
import { useTheme } from '@material-ui/core'
//import Scrollbar from 'react-scrollbars-custom'
//import PerfectScrollbar from 'react-perfect-scrollbar'
import { MyScrollableComponent } from '../core'

// <SimpleBar style={{ maxHeight: '100%', paddingBottom: 6 }}>
export default ({ style, children, padding, ...rest }) => {
  const theme = useTheme()
  if (!padding) padding = 3
  //marginLeft: -theme.spacing(padding), marginRight: -theme.spacing(padding), marginBottom: -theme.spacing(padding),
  return (
    <div style={{ marginLeft: -theme.spacing(padding), marginRight: -theme.spacing(padding), marginBottom: -theme.spacing(padding), ...style }} {...rest}>
      <MyScrollableComponent style={{ maxHeight: '100%', paddingBottom: 6 }} yHidden>
        {children}
      </MyScrollableComponent>
    </div>
  )
  // return (
  //   <div style={{ ...style }} {...rest}>
  //     <div style={{ overflowY: 'hidden', overflowX: 'auto'}}>
  //       {children}
  //     </div>
  //   </div>
  // )
}