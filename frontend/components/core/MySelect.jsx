import React, { useState } from 'react'
import { MenuItem, TextField, InputLabel, FormControl, makeStyles, useTheme } from '@material-ui/core'
import { Chip, BlockLink, ChevronUpIcon } from './'

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

export default ({ multiple, displayEmpty, label, value, onChange, chips, items, name, placeHolder, chipIcon, ...rest }) => {

  const theme = useTheme()
  if (!multiple) {
    for (let i in items) {
      if (items[i].value === '')
        items[i].label = <span style={{ fontWeight: theme.typography.fontWeightRegular, color: theme.palette.text.secondary }}>{items[i].label}</span>
      // else if (items[i].value === value)
      //   items[i].label = <span style={{ color: theme.palette.primary.main }}>{items[i].label}</span>
    }
  }

  const classes = useStyles()
  return (
      <TextField
        className={classes.formControl}
        select
        SelectProps={{
          //IconComponent: (props) => <ChevronUpIcon {...props} fontSize="small"/>,
          displayEmpty,
          multiple : multiple || chips,
          renderValue: !multiple ? undefined : selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip icon={chipIcon} size="small" key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )
        }}
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        {...rest}
      >
        {placeHolder &&
          <MenuItem value="">
            {placeHolder}
          </MenuItem>
        }
        {items.map((item, i) => {
          if (!item.href && !item.addToQuery)
            return <MenuItem value={item.value} key={i}>{item.label ? item.label : item.value}</MenuItem>
          else
            return (
              <MenuItem value={item.value} component={BlockLink} href={item.href} addToQuery={item.addToQuery} asPath={item.asPath} key={i}>
                {item.label ? item.label : item.value}
              </MenuItem>
            )
        })}
      </TextField>
  )
}