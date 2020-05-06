import React from 'react'
import { ChartTooltip } from '../'
import { Cell, PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts'

export default ({ data, colors, innerRadius }) => {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart height={450}>
        <Pie animationDuration={500} data={data} outerRadius={90} innerRadius={innerRadius ? innerRadius : 50} dataKey="value">
          {data.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)}
        </Pie>
        <Legend iconType="plainline" iconSize={12} align="left"/>
        <Tooltip content={<ChartTooltip/>}/>
      </PieChart>
    </ResponsiveContainer>
  )
}