import React from 'react'
import { Icon } from './'

export default ({ active }) => {
  return (
    <Icon name="mdiChevronUp" style={{ fontSize: 16, transform: active ? 'rotate(180deg)' : undefined, transition: '.2s' }}/>
  )
}