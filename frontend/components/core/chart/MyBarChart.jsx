import React from 'react'
import { ChartTooltip } from '../'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer} from 'recharts'
import { useTheme } from '@material-ui/core'


export default ({ data, bars, height, minWidth, legend }) => {
  const theme = useTheme()
  return (
    <ResponsiveContainer minWidth={minWidth} width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: 10 }} barGap={'10%'}>
        <CartesianGrid vertical={false} strokeDasharray="4 4"/>
        <XAxis tick={{ fill: theme.palette.text.secondary, fontSize: 12 }} dataKey="name" tickLine={false} axisLine={false}/>
        <YAxis orientation="right" tick={{ fill: theme.palette.text.secondary, fontSize: 12 }} width={30} tickLine={false} axisLine={false}/>
        <Tooltip content={<ChartTooltip/>} cursor={{ fill: theme.palette.contrast.medium }}/>
        {bars.map((bar, i) => {
          return <Bar dataKey={bar.dataKey} key={i} fill={bar.color} radius={[20, 20, 0, 0]} maxBarSize={30}/>
        })}
        {legend &&
          <Legend/>
        }
      </BarChart>
    </ResponsiveContainer>
  )
}