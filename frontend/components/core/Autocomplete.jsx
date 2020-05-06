import React from 'react'
import { TextField, Chip } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { TagIcon } from './'

export default ({ label, getOptionLabel, options, onChange, name, getOptionValue, ...rest }) => {
  if (!getOptionLabel) getOptionLabel = x => x
  if (!getOptionValue) getOptionValue = x => x
  const handleChange = (e, values) => {
    onChange({
      target: {
        name,
        value: values.map(option => getOptionValue(option))
      }
    })
  }

  return (
    <Autocomplete
      {...rest}
      onChange={handleChange}
      options={options}
      getOptionLabel={getOptionLabel}
      renderTags={(value, getTagProps) =>
        value.map((options, index) => (
          <Chip
            label={getOptionLabel(options)}
            icon={<TagIcon/>}
            size="small"
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          fullWidth
        />
      )}
    />
  )
}