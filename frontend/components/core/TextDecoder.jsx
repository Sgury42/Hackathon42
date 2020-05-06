import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Link, useTheme, Checkbox } from '@material-ui/core'
import { MyTypography } from './'


export default ({ children, component, ...rest }) => {
  const theme = useTheme()

  let options = {
    createElement(type, props, children) {
      // security on props
      const authorizedProps = [
        { name: 'style', types: ['object'] },
        { name: 'variant', types: ['string'] },
        { name: 'color', types: ['string'] },
        { name: 'href', types: ['string'] },
        { name: 'key', types: ['string', 'number'] },
        { name: 'src', types: ['string'] },
        { name: 'checked', types: ['boolean'] },
        { name: 'paragraph', types: ['boolean'] }
      ]
      const filteredProps = {}
      for (let prop of authorizedProps) {
        for (let type of prop.types) {
          if (typeof(props[prop.name]) === type)
            filteredProps[prop.name] = props[prop.name]
        }
      }
      return React.createElement(type, filteredProps, children)
    },
    overrides: {
      span: {
        component: 'span',
      },
      p: {
        component: MyTypography,
        props: { style: { paragraph: true } },
      },
      colored: {
        component: 'span',
        props: { style: { color: theme.palette.primary.main } }
      },
      center: {
        component: 'div',
        props: { style: { display: 'inline-block', textAlign: 'center', width: '100%' } }
      },
      strong: {
        component: 'span',
        props: { style: { fontWeight: theme.typography.fontWeightMedium } }
      },
      input: {
        component: Checkbox,
        props: { style: { padding: 0 } }
      },
      h1: {
        component: MyTypography,
        props: { variant: 'h1', style: { margin: '8px 0' } },
      },
      h2: {
        component: MyTypography,
        props: { variant: 'h2', style: { margin: '8px 0' } },
      },
      h3: {
        component: MyTypography,
        props: { variant: 'h3', style: { margin: '8px 0' } },
      },
      h4: {
        component: MyTypography,
        props: { variant: 'h4', style: { margin: '8px 0' } },
      },
      h5: {
        component: MyTypography,
        props: { variant: 'h5', style: { margin: '8px 0' } },
      },
      h6: {
        component: MyTypography,
        props: { variant: 'h6', style: { margin: '8px 0' } },
      },
      small: {
        component: MyTypography,
        props: { variant: 'caption' }
      },
      a: Link,
      blockquote: {
        component: 'div',
        props: {
          style: { color: theme.palette.text.secondary, backgroundColor: theme.palette.contrast.medium, borderLeft: `solid 3px ${theme.palette.contrast.high}`, padding: '4px 10px', fontStyle: 'italic' }
        }
      }
    }
  }
  if (!children) return null
  return (
    <div {...rest}>
      <Markdown options={options} style={{ whiteSpace: 'pre-line' }}>
        {children}
      </Markdown>
    </div>
  )
}