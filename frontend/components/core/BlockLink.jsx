import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'
import queryString from 'query-string'

const useStyles = makeStyles({
  link: {
    cursor: 'pointer',
    color: 'inherit',
    display: 'block',
    textDecoration: 'none !important',
    '&:hover': {
      color: 'inherit',
    },
  },
})

export default React.forwardRef(({ href, children, asPath, addToQuery, onClick, outLink, ...rest }, ref) => {
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
    <a onClick={outLink ? undefined : navigate} href={asPath ? asPath : href} className={classes.link} ref={ref} {...rest}>
      {children}
    </a>
  )
})