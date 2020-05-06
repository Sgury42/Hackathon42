import React from 'react'
import { useRouter } from 'next/router'
import { Link, makeStyles } from '@material-ui/core'
import { MyTypography } from './'
import queryString from 'query-string'

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'underline',
      //backgroundColor: theme.palette.primary.extraLight
    }
  }
}))

export default ({ href, asPath, addToQuery, onClick, children, variant, medium, ...rest }) => {
  const router = useRouter()
  const classes = useStyles()

  if (addToQuery) {
    href = router.pathname
    let start = href.indexOf('?')
    if (start >= 0)
      href = href.substring(0, start)
    addToQuery = { ...router.query, ...addToQuery}
    let newQuery = queryString.parse(queryString.stringify(addToQuery))
    // Object.keys(addToQuery).map(key => {
    //   if (addToQuery[key] !== undefined && addToQuery[key] !== null)
    //     newQuery[key] = addToQuery[key]
    // })
    newQuery = queryString.stringify(newQuery)
    href = href + (newQuery ? '?' + newQuery : '')
  }

  const navigate = e => {
    e.preventDefault()
    if (href === router.asPath)
      router.replace(href, asPath)
    else
      router.push(href, asPath)
    if (onClick)
      onClick(e)
  }


  return (
    <a href={href} onClick={navigate} className={classes.root} {...rest}>
      <MyTypography component="span" color="primary" variant={variant} medium={medium}>
        {children}
      </MyTypography>
    </a>
  )
}