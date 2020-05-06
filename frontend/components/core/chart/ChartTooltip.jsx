import React from 'react'
import { Card, MyTypography } from '../'

export default ({ active, payload, label }) => {
  if (active) {
    return (
      <Card padding={1}>
        {label &&
          <MyTypography variant="body2" color="textSecondary">{label}</MyTypography>
        }
        {payload && payload.map((x) => {
          const color = x.color ? x.color : x.payload.fill ? x.payload.fill : undefined
          return (
            <div style={{ display: 'flex', alignItems: 'center' }} key={x.name + x}>
              <MyTypography key={x.value} variant="body2" medium>{x.value}</MyTypography>
              <MyTypography style={{ color, marginLeft: 4 }} variant="body2" medium>{x.name}</MyTypography>
            </div>
          )
        }
        )}
      </Card>
    )
  }

  return null
};