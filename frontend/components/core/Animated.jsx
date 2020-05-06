import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export default ({ on, animation, children, duration, delay, style, onStart, onRest, magnitude }) => {

  if (delay === undefined) delay = 0
  if (!magnitude) magnitude = 150
  
  // effects
  let spring
  if (animation === 'fromRight') {
    spring = {
      from: { transform: `translateX(${magnitude}px)`, opacity: 0 },
      to: { transform: on ? `translateX(0px)` : `translateX(${magnitude}px)`, opacity: on ? 1 : 0 },
    }
  } else if (animation === `fromLeft`) {
    spring = {
      from: { transform: `translateX(-${magnitude}px)`, opacity: 0 },
      to: { transform: on ? `translateX(0px)` : `translateX(-${magnitude}px)`, opacity: on ? 1 : 0 },
    }
  } else if (animation === `fromBottom`) {
    spring = {
      from: { transform: `translateY(${magnitude}px)`, opacity: 0 },
      to: { transform: on ? `translateX(0px)` : `translateY(${magnitude}px)`, opacity: on ? 1 : 0},
    }
  } else if (animation === `fromTop`) {
    spring = {
      from: { transform: `translateY(-${magnitude}px)`, opacity: 0 },
      to: { transform: on ? `translateX(0px)` : `translateY(-${magnitude}px)`, opacity: on ? 1 : 0},
    }
  } else if (animation === `zoomIn`) {
    spring = {
      from: { transform: `scale(0.7)`, opacity: 0 },
      to: { transform: on ? `scale(1)` : `scale(0.7)`, opacity: on ? 1 : 0 },
    }
  } else if (animation === `zoomOut`) {
    spring = {
      from: { transform: `scale(1.5)`, opacity: 0 },
      to: { transform: on ? `scale(1)` : `scale(1.5)`, opacity: on ? 1 : 0 },
    }
  } else if (animation === `fadeIn`) {
    spring = {
      from: { opacity: 0 },
      to: { opacity: on ? 1 : 0 },
    }
  }

  spring = useSpring({
    ...spring,
    delay,
    config: {
      duration
    },
    onStart,
    onRest
  })

  return (
    <div style={style}>
      <animated.div style={{ ...style, ...spring }}>
        {children}
      </animated.div>
    </div>
  )
}