import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import Animated from './Animated'

export default ({ animation, children, partially, on, offset, minTopValue, onVisible, ...rest }) => {
  const [visible, setVisible] = useState(false)

  const onChange = isVisible => {
    if (isVisible && !visible) {
      setVisible(true)
      if (onVisible)
        onVisible()
    }
  }

  return (
    <VisibilitySensor partialVisibility={partially} onChange={onChange} offset={offset} minTopValue={minTopValue}>
      <Animated animation={animation} on={visible && (on !== undefined ? on : true)} {...rest}>
        {children}
      </Animated>
    </VisibilitySensor>
  )
}
