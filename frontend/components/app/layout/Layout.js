import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import TopBar from './TopBar'
// import Footer from './Footer'
import { Toolbar, useTheme } from '@material-ui/core'
import { GoogleAnalytics, MyScrollableComponent } from '../../core'

export default ({ children }) => {
  const theme = useTheme()
  const router = useRouter()
  const [path, setPath] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
    setPath(router.pathname)
  }, [router.pathname])

  return (
    <React.Fragment>
      <MyScrollableComponent xHidden style={{ width: '100%', height: '100vh' }}>
        <Toolbar variant="dense"/>
        <TopBar/>
        {path === router.pathname &&
          <React.Fragment>
            {/* <GoogleAnalytics/> */}
            <main style={{ marginTop: theme.topSpace, marginBottom: theme.spacing(3) }}>
              {children}
            </main>
            {/* <Footer/> */}
          </React.Fragment>
        }
      </MyScrollableComponent>
    </React.Fragment>
  )
}