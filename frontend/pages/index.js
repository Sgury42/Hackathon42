import React, { useState } from 'react'
import { Typography, useTheme, Grid, Hidden, TextField, Card, CardMedia, CardContent, makeStyles, CardActionArea, CardActions, Button } from '@material-ui/core'
import { AnimatedWhenVisible, Banner, BlockLink, MyTypography, Icon } from '../components/core'
import queryString from 'query-string'

const HomeCard = ({ image, title, text }) => {
  const theme = useTheme()
  return (
    <Card>
      <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={image} style={{ height: 200 }}/>
        </div>
        <Typography style={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(2) }} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography align="center" variant="body2" color="textSecondary" paragraph>
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default () => {
  const theme = useTheme()
  
  return (
    <React.Fragment>
      <Banner
        style={{
          marginTop: -100, padding: '200px 0 120px 0',
          position: 'relative',
          color: 'white',
          background: `url(/images/network.png) ${theme.palette.secondary.main}`,
        }}
      >
        {/* <div style={{
          position:'absolute',
          top: -80,
          left: -30,
          right: -30,
          bottom: 0,
          transform: 'rotate(1deg)',
          background: `linear-gradient(126deg, #04BFA6 0%, rgba(98,137,244,1) 40%, #04BFA6 100%)`
        }}/> */}
        <div style={{ position: 'relative'}}>
          <AnimatedWhenVisible animation="fromLeft">
            <Grid container alignItems="flex-start">
              <Grid item xs={12} md={6}>
                <Typography variant="h1" style={{ marginBottom: 8 }}>P2P Mentorship</Typography>
                <Typography variant="h6" style={{ opacity: .75, marginBottom: 16 }}>
                  Find your peer to peer team to grow your startup stronger and faster.
                </Typography>
                <BlockLink href="/register">
                  <Button variant="contained" color="primary">Find my team now !</Button>
                </BlockLink>
              </Grid>
            </Grid>
          </AnimatedWhenVisible>
          <Hidden smDown>
            <div style={{ zIndex: 100, position: 'absolute', right: -50, bottom: -150, height: 300 }}>
              <AnimatedWhenVisible animation="fromRight" partially>
                <img style={{ height: 300 }} src="images/illustrations/undraw_shared_workspace_hwky.svg" alt="Augmenter votre productivité"/>
              </AnimatedWhenVisible>
            </div>
          </Hidden>
        </div>
      </Banner>
      <Banner
        style={{
        padding: '100px 0 100px 0',
        position: 'relative'
        }}
      >
          <AnimatedWhenVisible animation="zoomIn" partially>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div style={{ margin: '0 auto', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ padding: 20, backgroundColor: theme.palette.primary.extraLight, borderRadius: '100%' }}>
                    <Icon name="mdiAccountGroupOutline" size={80} color="primary"/>
                  </div>
                  <MyTypography variant="h2" color="primary" align="center" gutterBottom>Find team support</MyTypography>
                  <MyTypography align="center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</MyTypography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ margin: '0 auto', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ padding: 20, backgroundColor: theme.palette.primary.extraLight, borderRadius: '100%' }}>
                    <Icon name="mdiHandshake" size={80} color="primary"/>
                  </div>
                  <MyTypography variant="h2" color="primary" align="center" gutterBottom>Find team support</MyTypography>
                  <MyTypography align="center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</MyTypography>
                </div>
              </Grid>
            </Grid>
          </AnimatedWhenVisible>
      </Banner>
      <Banner
        style={{
          padding: '100px 0 100px 0',
          position: 'relative',
          backgroundColor: theme.palette.contrast.low,
        }}
      >
          <AnimatedWhenVisible animation="fromLeft" partially>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <div style={{ padding: 20, backgroundColor: theme.palette.secondary.extraLight, borderRadius: '100%' }}>
                <Icon name="mdiAccountGroupOutline" size={100} color="secondary"/>
              </div>
              <div style={{ marginLeft: theme.spacing(5) }}>
                <MyTypography variant="h2" color="secondary" align="left" gutterBottom>Find team support</MyTypography>
                <MyTypography style={{ maxWidth: 700 }} align="left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</MyTypography>
              </div>
            </div>
          </AnimatedWhenVisible>
      </Banner>
      <Banner
        style={{
          padding: '100px 0 100px 0',
          position: 'relative',
          // backgroundColor: theme.palette.contrast.low,
        }}
      >
          <AnimatedWhenVisible animation="fromRight" partially>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <div style={{ marginRight: theme.spacing(5) }}>
                <MyTypography variant="h2" color="primary" align="right" gutterBottom>Find team support</MyTypography>
                <MyTypography style={{ maxWidth: 700 }} align="right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</MyTypography>
              </div>
              <div style={{ padding: 20, backgroundColor: theme.palette.primary.extraLight, borderRadius: '100%' }}>
                <Icon name="mdiAccountGroupOutline" size={100} color="primary"/>
              </div>
            </div>
          </AnimatedWhenVisible>
      </Banner>
      <Banner
        style={{
          padding: '100px 0 100px 0',
          position: 'relative',
          backgroundColor: theme.palette.contrast.low,
        }}
      >
        {/* <Gird container>
          <div style={{ width: 100, height: 100, borderRadius: '100%'}}>
            
          </div>
        </Gird> */}
      </Banner>
      <Banner>
      <Grid container direction="column">
        <Grid item>
        </Grid>
      </Grid>
      </Banner>
    </React.Fragment>
  )
}













