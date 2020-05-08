import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
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
  // const history = useHistory()
  
  return (
    <React.Fragment>
      <Banner
        style={{
          marginTop: -100, padding: '190px 0 110px 0',
          position: 'relative',
          color: 'white',
          background: `url(/images/network.png) ${theme.palette.secondary.main}`,
        }}
      >
        <div style={{ position: 'relative'}}>
          <AnimatedWhenVisible animation="fromLeft">
            <Grid container alignItems="flex-start">
              <Grid item xs={12} md={5}>
                <Typography variant="h1" style={{ marginBottom: 8 }}>Ants.ia</Typography>
                <Typography variant="h6" style={{ opacity: .75, marginBottom: 16 }}>
                  Connect to entrepreneurs like you and use collective intelligence to gain 5 years of experience
                </Typography>
                <BlockLink outLink href="https://chat.csml.dev/channels/bikrcjlzr5cjtkd3fltkl6fekbsvzrnb">
                  <Button variant="contained" color="primary" size="large"><MyTypography variant="h6">Find my anthill !</MyTypography></Button>
                </BlockLink>
              </Grid>
            </Grid>
          </AnimatedWhenVisible>
          <Hidden smDown>
            <div style={{ zIndex: 100, position: 'absolute', right: -50, bottom: -140, height: 300 }}>
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
                  <MyTypography align="center">Validate business idead, grow your team, onboard customers… meet 3000+ entrepreneurs who have encountered and solved these isues</MyTypography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ margin: '0 auto', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ padding: 20, backgroundColor: theme.palette.primary.extraLight, borderRadius: '100%' }}>
                    <Icon name="mdiHandshake" size={80} color="primary"/>
                  </div>
                  <MyTypography variant="h2" color="primary" align="center" gutterBottom>Be united</MyTypography>
                  <MyTypography align="center">A strong community builds upon values<br/>Mutual aid – sharing knowledge - kindness</MyTypography>
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
                <Icon name="mdiRocketOutline" size={100} color="secondary"/>
              </div>
              <div style={{ marginLeft: theme.spacing(5), maxWidth: 600 }}>
                <MyTypography variant="h2" color="secondary" align="left" gutterBottom>Why Ants.ia ?</MyTypography>
                <MyTypography align="left">Because ants share knowledge and work all together in the same direction for a global purpose. </MyTypography>
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
              <div style={{ marginRight: theme.spacing(5), maxWidth: 600 }}>
                <MyTypography variant="h2" color="primary" align="right" gutterBottom>90% of entrepreneur's issues are fixed by other entrepreneurs</MyTypography>
                <MyTypography align="right">Ants.ia connect entrepreneurs together to make them solve entrepreneur’s issues</MyTypography>
              </div>
              <div style={{ padding: 20, backgroundColor: theme.palette.primary.extraLight, borderRadius: '100%' }}>
                <Icon name="mdiLightbulbGroupOutline" size={100} color="primary"/>
              </div>
            </div>
          </AnimatedWhenVisible>
      </Banner>
      <Banner
        style={{
          padding: '20px 0 20px 0',
          position: 'relative',
          backgroundColor: theme.palette.contrast.low,
          overflow: 'hidden'
        }}
      >
        <AnimatedWhenVisible animation="fromBottom">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img src="/images/illustrations/ant.svg" height="300px" style={{ marginTop: -20, marginBottom: -20 }}/>
            <div>
              <Button color="primary" variant="contained" size="large"><MyTypography variant="h3">Find my mates !</MyTypography></Button>
            </div>
          </div>
        </AnimatedWhenVisible>
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













