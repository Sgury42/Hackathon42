import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Grid, Chip, Card, CardContent, TextField, CardHeader, CardActions, Button, List, ListItem } from '@material-ui/core'
import { TextLink, MyTypography, Icon, BlockLink } from '../components/core'
import { Problems, Goals, Avatar, Tags } from '../components/app'

export default () => {
  const theme = useTheme()
  const group = useSelector(s => s.objects.group)
  const chatMessages = useSelector(s => s.lists.chatMessages)
  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <MyTypography variant="h1">{group.name}</MyTypography>
            </Grid>
            <Grid item xs={12}>
              <MyTypography variant="body2" color="textSecondary">{group.description}</MyTypography>
            </Grid>
            <Grid item xs={12}>
              <Tags tags={group.tags} style={{ marginTop: theme.spacing(1) }}/>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {group.users.map(user => (
                  <Grid item>
                    <BlockLink href={'/user'}>
                      <Avatar user={user}/>
                    </BlockLink>
                  </Grid> 
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <MyTypography variant="h6" style={{ marginBottom: theme.spacing(1) }} medium>💬 Chat</MyTypography>
          <Card>
            <CardContent>
              <div>
                <List>
                  {chatMessages.map((message, i) => (
                    <ListItem divider>
                      <div style={{ display: 'flex' }} key={i}>
                        <Avatar user={message.author} size={28}/>
                        <div style={{ flexGrow: 1, marginLeft: theme.spacing(1.5) }}>
                          <MyTypography variant="body2" bold style={{ marginBottom: theme.spacing(.5) }}>
                            {message.author.firstname}
                            <MyTypography variant="caption" color="textSecondary">{` ${message.createdAt}`}</MyTypography>
                          </MyTypography>
                          <MyTypography variant="body2">{message.text}</MyTypography>
                        </div>
                      </div>
                    </ListItem>
                  ))}
                </List>
              </div>
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField multiline fullWidth label="Type some text..." placeHolder=""/>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Goals/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Problems/>
        </Grid>
      </Grid>
    </Container>
  )
}