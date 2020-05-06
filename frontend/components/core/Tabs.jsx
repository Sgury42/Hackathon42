import React, { useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import { BlockLink } from './'
import { useRouter } from 'next/router'
import queryString from 'query-string'

export default ({ tabs, onChange }) => {
  const [tab, setTab] = useState(0)
  const router = useRouter()
  return (
    <Tabs
      value={tab}
      indicatorColor="primary"
      textColor="primary"
      onChange={(e, v) => [setTab(v)]}
      aria-label="disabled tabs example"
    >
      {tabs.map((tab, i) => {
        return (
          <Tab component={BlockLink} addToQuery={tab.query} key={i} icon={tab.Icon ? <tab.Icon/> : tab.icon} label={tab.label}/>
        )
      })}
    </Tabs>
  )
}