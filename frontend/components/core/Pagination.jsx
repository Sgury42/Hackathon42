import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { MyTypography, BlockLink, MyButton } from './'
import { useTheme } from '@material-ui/core'
import queryString from 'query-string'

export default ({ pages, page, onClick, style, useURL }) => {
  const theme = useTheme()
  const router = useRouter()
  const query = router.query
  if (useURL) {
    page = query.page
    if (!page)
      page = 1
  }
  if (pages === 1) return null
  pages = parseInt(pages)
  page = parseInt(page)

  const handleClick = n => {
    if (onClick)
      onClick(n)
  }

  const display = [1, page - 1, page, page + 1, pages]
  const displayed = []
  // prepare pathname
  let { pathname } = router

  return (
    <div style={{display: 'flex', justifyContent: 'left', ...style}}>
      {display.map(n => {
        if (n >= 1 && n <= pages && !displayed.includes(n)) {
          displayed.push(n)
          let linkQuery = { ...query }
          linkQuery.page = n
          return (
            <MyButton
              color="primary"
              component={useURL ? BlockLink : undefined}
              href={pathname + '?' + queryString.stringify(linkQuery)}
              key={n}
              disableElevation
              onClick={() => handleClick(n)}
              active={n === page}
              variant={n === page ? 'contained' : 'colored'}
              style={{ padding: '2px 0', minWidth: 0, width: 30, height: 30, marginRight: 4  }}
            >
              {n}
            </MyButton>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}