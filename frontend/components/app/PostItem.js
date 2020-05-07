
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Collapse, Container, Grid, Chip, Card, CardContent, TextField, CardHeader, CardActions, Button } from '@material-ui/core'
import { TextLink, MyTypography, Icon, BlockLink } from '../core'
import { Avatar } from './'

export default ({ post }) => {
  const theme = useTheme()
  const [displayResponses, setDisplayResponses] = useState(false)
  return (
    <Card>
      <CardContent>
        <div style={{ display: 'flex'}}>
          <Avatar user={post.author}/>
          <div style={{ flexGrow: 1, marginLeft: theme.spacing(1.5) }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <MyTypography bold>{post.name}</MyTypography>
              </Grid>
              <Grid item xs={12}>
                <MyTypography variant="body2">{post.description}</MyTypography>
              </Grid>
            </Grid>
          </div>
        </div>
      </CardContent>
      {post.comments && post.comments.length > 0 &&
        <React.Fragment>
          <CardActions style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick={() => setDisplayResponses(!displayResponses)} size="small" color="secondary">
              {!displayResponses ?
                `Show responses (${post.comments.length})`
                :
                `Hide responses (${post.comments.length})`
              }
            </Button>
            <Button size="small" color="secondary">
              Reply
            </Button>
          </CardActions>
          <Collapse in={displayResponses}>
            <CardContent>
              <Grid container spacing={2}>
                {post.comments.map((comment, i) => (
                  <Grid item xs={12}>
                    <div style={{ display: 'flex', marginLeft: 48 }} key={i}>
                      <Avatar user={comment.author} size={28}/>
                      <div style={{ flexGrow: 1, marginLeft: theme.spacing(1.5) }}>
                        <MyTypography variant="body2">{comment.text}</MyTypography>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Collapse>
        </React.Fragment>
      }
    </Card>
  )
}