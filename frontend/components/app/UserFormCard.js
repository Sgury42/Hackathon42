import React, { useState, useEffect } from 'react'
import Joi from '@hapi/joi'
import { userJoiSchema } from '../../../validation'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setObject } from '../../redux/actions'
// components
import { Grid, useTheme, TextField, Card, CardContent, Chip, MenuItem, Button } from '@material-ui/core'
import { BlockLink } from '../core'
import req from '../../redux/req'

export default ({ user, onClose }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const tags = useSelector(s => s.lists.tags)

  const [form, setForm] = useState({
    email: user ? user.email : '',
    firstname: user ? user.firstname : '',
    lastname: user ? user.lastname : '',
    password: '',
    city: user ? user.city : '',
    description: user ? user.description : '',
    tags: user ? user.tags.map(tag => tag.label) : [],
  })
  const [errors, setErrors] = useState({})

  const validateField = (field) => {
    if (userJoiSchema[field.name]) {
      const res = Joi.object({ [field.name]: userJoiSchema[field.name] }).validate({ [field.name]: field.value })
      if (res.error)
        setErrors({ ...errors, [field.name]: res.error.details[0].message })
      else
        setErrors({ ...errors, [field.name]: undefined })
    }
  }

  const validateForm = () => {
    let newErrors = {}
    const formEntries = Object.entries(form)
    for (let [key, value] of formEntries) {
      if (userJoiSchema[key]) {
        const res = Joi.object({ [key]: userJoiSchema[key] }).validate({ [key]: value })
        if (res.error)
          newErrors[key] = res.error.details[0].message
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return false
    }
    return true
  }
  
  const onChange = e => {
    const field = {
      value: e.target.value,
      name: e.target.name
    }
    setForm({ ...form, [field.name] : field.value })
    validateField(field)
  }

  const toggle = e => {
    setForm({ ...form, [e.target.name]: !form[e.target.name]})
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (validateForm()) {
      dispatch(setObject('currentUser', { ...form }))
    }
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={onSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                type="email"
                name="email"
                value={form.email}
                error={Boolean(errors.email)}
                helperText={errors.email}
                onChange={onChange}
                label="Email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="firstname"
                value={form.firstname}
                error={Boolean(errors.firstname)}
                helperText={errors.firstname}
                onChange={onChange}
                label="Firstname"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="lastname"
                value={form.lastname}
                error={Boolean(errors.lastname)}
                helperText={errors.lastname}
                onChange={onChange}
                label="Lastname"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="city"
                value={form.city}
                error={Boolean(errors.city)}
                helperText={errors.city}
                onChange={onChange}
                label="City"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                value={form.description}
                error={Boolean(errors.description)}
                helperText={errors.description}
                onChange={onChange}
                label="Description"
                fullWidth
                required
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                name="password"
                value={form.password}
                error={Boolean(errors.password)}
                helperText={errors.password}
                onChange={onChange}
                label="Password"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              {tags &&
                <TextField
                  style={{ minWidth: 120 }}
                  select
                  label="Tags"
                  value={form.tags}
                  name="tags"
                  onChange={onChange}
                  fullWidth
                  SelectProps={{
                    displayEmpty: false,
                    multiple: true,
                    renderValue: selected => selected.join(', ')
                  }}
                >
                  {tags.data.map(tag => (
                    <MenuItem value={tag.label} key={tag.label}>{tag.label}</MenuItem>
                  ))}
                </TextField>
              }
            </Grid>
            <Grid item>
              <BlockLink href="/groups">
                <Button variant="contained" color="primary" type="submit">
                  Register
                </Button>
              </BlockLink>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}