import React, { useState } from 'react'
import { Typography, useTheme, Grid, Hidden, TextField, Card, CardMedia, CardContent, makeStyles, CardActionArea, CardActions, Button } from '@material-ui/core'
import { AnimatedWhenVisible, Banner, BlockLink, MyTypography } from '../components/core'
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
          marginTop: -100, padding: '180px 0 100px 0',
          position: 'relative',
          color: 'white',
        }}
      >
        <div style={{
          position:'absolute',
          top: -80,
          left: -30,
          right: -30,
          bottom: 0,
          transform: 'rotate(1deg)',
          background: `linear-gradient(126deg, #04BFA6 0%, rgba(98,137,244,1) 40%, #04BFA6 100%)`
        }}/>
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
            <div style={{ zIndex: 100, position: 'absolute', right: -50, bottom: -350, height: 480 }}>
              <AnimatedWhenVisible animation="fromRight" partially>
                <img style={{ height: 300 }} src="images/illustrations/undraw_shared_workspace_hwky.svg" alt="Augmenter votre productivité"/>
              </AnimatedWhenVisible>
            </div>
          </Hidden>
        </div>
      </Banner>
      <Banner
        style={{
        padding: '180px 0 100px 0',
        position: 'relative'
        }}
        textColor="white"
      >
          <AnimatedWhenVisible animation="fromLeft" partially>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={8} sm={4}>
                <HomeCard
                  title="Find team support"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris metus lectus, dictum a libero a, bibendum fermentum urna. Pellentesque ultricies facilisis nibh nec pulvinar."
                  image="/images/illustrations/undraw_stand_out_1oag.svg"
                />
              </Grid>
              <Grid item xs={8} sm={4}>
                <HomeCard
                  title="Find team support"
                  image="/images/illustrations/undraw_status_update_jjgk.svg"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris metus lectus, dictum a libero a, bibendum fermentum urna. Pellentesque ultricies facilisis nibh nec pulvinar."
                />
              </Grid>
              <Grid item xs={8} sm={4}>
                <HomeCard
                  title="Find team support"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris metus lectus, dictum a libero a, bibendum fermentum urna. Pellentesque ultricies facilisis nibh nec pulvinar."
                  image="/images/illustrations/undraw_Group_chat_unwm.svg"
                />
              </Grid>
            </Grid>
          </AnimatedWhenVisible>
          {/* <Hidden smDown>
            <div style={{ zIndex: 100, position: 'absolute', right: -50, bottom: -150, height: 480 }}>
              <AnimatedWhenVisible animation="fromRight" partially>
              </AnimatedWhenVisible>
            </div>
          </Hidden> */}
      </Banner>
    </React.Fragment>
  )
}













