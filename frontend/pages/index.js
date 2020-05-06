import React, { useState } from 'react'
import { Typography, useTheme, Grid, Hidden, TextField, Card, CardMedia, CardContent, makeStyles, CardActionArea, CardActions} from '@material-ui/core'
import { Button, AnimatedWhenVisible, Banner, BlockLink, MyTypography, MyButton} from '../components/core'
import queryString from 'query-string'

const useStyles = makeStyles({
  media: {
    height: 300
  },
});

export default () => {
  const theme = useTheme()
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Banner
        style={{
        marginTop: -100, padding: '180px 0 100px 0',
        position: 'relative'
        }}
        textColor="white"
      >
        <div style={{
          position:'absolute',
          top: -80,
          left: -30,
          right: -30,
          bottom: 0,
          transform: 'rotate(2deg)',
          background: `linear-gradient(126deg, #04BFA6 0%, rgba(98,137,244,1) 40%, #04BFA6 100%)`
        }}/>
        <div style={{ position: 'relative'}}>
          <AnimatedWhenVisible animation="fromLeft">
            <Grid container alignItems="flex-start">
              <Grid item xs={12} md={6}>
                <Typography variant="h1" style={{ marginBottom: 8 }}><b>P2P</b><br/>peer 2 peer and team work for everyone</Typography>
                <Typography variant="h6" style={{ opacity: .75, marginBottom: 16 }}>
                  Find your perfect team and work together to achieve your goal.
                </Typography>
                <BlockLink href="/register">
                  <MyButton color="primary">Find my team now !</MyButton>
                </BlockLink>
              </Grid>
            </Grid>
          </AnimatedWhenVisible>
          <Hidden smDown>
            <div style={{ zIndex: 100, position: 'absolute', right: -50, bottom: -150, height: 480 }}>
              <AnimatedWhenVisible animation="fromRight" partially>
                <img style={{ height: 480 }} src="images/illustrations/undraw_Connecting_Teams_8ntu.svg" alt="Augmenter votre productivité"/>
              </AnimatedWhenVisible>
            </div>
          </Hidden>
        </div>
      </Banner>
      <Banner
        style={{
        marginTop: -100, padding: '180px 0 100px 0',
        position: 'relative'
        }}
        textColor="white"
      >
          <AnimatedWhenVisible animation="fromLeft">
            <Grid container spacing={2}>
            <Grid item xs={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/illustrations/undraw_stand_out_1oag.svg"
                  title="team support"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Find team support
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/illustrations/undraw_status_update_jjgk.svg"
                  title="Share ideas"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Share your ideas
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/illustrations/undraw_Group_chat_unwm.svg"
                  title="accountability" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Find accountability
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Grid>
            </Grid>
          </AnimatedWhenVisible>
          <Hidden smDown>
            <div style={{ zIndex: 100, position: 'absolute', right: -50, bottom: -150, height: 480 }}>
              <AnimatedWhenVisible animation="fromRight" partially>
              </AnimatedWhenVisible>
            </div>
          </Hidden>
      </Banner>
    </React.Fragment>
  )
}












