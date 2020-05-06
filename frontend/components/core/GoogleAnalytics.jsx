import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import req from '../../redux/req'
//import { useRouter } from 'next/router'
ReactGA.initialize('UA-156940103-3', {
  gaOptions: { cookieDomain: 'auto' },
  debug: true,
})
//ReactGA.pageview(window.location.pathname + window.location.search)

const makeRequest = async () => {
  req('/api/ga/pageView', {
    query: {
      pathname: window.location.pathname,
      userAgent: window.navigator.userAgent,
      title: document.title,
      referer: window.sentReferrer ? '' : document.referrer
    }
  })
  // delete referrer
  window.sentReferrer = true
}

export default () => {
  //const router = useRouter()
  useEffect(() => {
    // This line will trigger on a route change
    // ReactGA.pageview(window.location.pathname)
    // console.log('Google Analytics: ' + window.location.pathname)
    makeRequest()
  })
  return null
}
