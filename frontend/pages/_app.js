import React from 'react'
import { MuiThemeProvider, CssBaseline, useTheme } from '@material-ui/core'
import { Provider } from 'react-redux'
import { makeStore, store } from '../redux/store'
import App from 'next/app'
import withRedux from "next-redux-wrapper";
import { updateObject, fetchCurrentUser } from '../redux/actions'
import Head from 'next/head'
// components
import { SnackbarProvider } from '../components/core'
import { Layout } from '../components/app'
// theme
import theme from '../theme'
import 'overlayscrollbars/css/OverlayScrollbars.css';

export default withRedux(makeStore, { debug: false })(class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    if (ctx.req)
      store.dispatch(updateObject('auth', { token: ctx.req.cookies.Authorization }))
    // if (ctx.pathname.includes('/admin') && ctx.isServer)
    //   store.dispatch(fetchCurrentUser())
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
      }
    };
  }

  render() {
    const { Component, pageProps, store, router } = this.props
    // can change theme and layout by checking url here
    // if (router.pathname.startsWith('/admin')) {
    //   theme = dashboardTheme
    //   Layout = AdminLayout
    // }
    return (
      <React.Fragment>
        <Head>
          <link href="/css/global.css" rel="stylesheet"/>
          <link href="/css/scrollbar.css" rel="stylesheet"/>
          {/*<script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P73F6RB');`}}/>*/}
          <title>{`Hackaton`}</title>
          <meta name="description" content="Hackaton!"/>
          <meta name="google-site-verification" content="IfaHffVB-XnSt4uCDQkSckiqCiM8VWqi95Bm6gD4m6U" />
          <meta name="referrer" content="origin-when-cross-origin"/>
        </Head>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <SnackbarProvider>
              <CssBaseline/>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SnackbarProvider>
          </MuiThemeProvider>
        </Provider>
      </React.Fragment>
    )
  }
})