import React from 'react'
import { ChevronUpIcon } from './'

export default ({ active }) => {
  return (
    <ChevronUpIcon style={{ fontSize: 16, transform: active ? 'rotate(180deg)' : undefined, transition: '.2s' }}/>
  )
}