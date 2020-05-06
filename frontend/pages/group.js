import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Avatar, Grid, Chip, Card, CardContent, TextField, CardHeader, CardActions } from '@material-ui/core'
import { TextLink, MyTypography, Icon, BlockLink } from '../components/core'

export default () => {
  const theme = useTheme()
  const group = useSelector(s => s.objects.group)
  const chatMessages = useSelector(s => s.lists.chatMessages)
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <MyTypography variant="h1">{group.name}</MyTypography>
            </Grid>
            <Grid item xs={12}>
              <MyTypography variant="body2">{group.description}</MyTypography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {group.tags.map(tag => (
                  <Grid item>
                    <Chip icon={<Icon name="mdiCircleMedium"/>} label={tag.label} style={{ background: tag.color, color: theme.palette.getContrastText(tag.color) }}/>
                  </Grid> 
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {group.users.map(user => (
                  <Grid item>
                    <BlockLink href={'/user'}>
                      <Avatar style={{ width: 42, height: 42, fontSize: 20 }}>{user.firstname.charAt(0)}</Avatar>
                    </BlockLink>
                  </Grid> 
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <MyTypography variant="h6" medium>⭐ Goals</MyTypography>
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField multiline fullWidth label="What is your current goal..." placeHolder=""/>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Deadline (MM/DD/YYYY)" placeHolder=""/>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <MyTypography variant="h6" medium>😞 Problems</MyTypography>
            </CardContent>
            <CardActions>
              <TextField multiline fullWidth label="Have you a problem ?" placeHolder=""/>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <MyTypography variant="h6" medium>💬 Chat</MyTypography>
            </CardContent>
            <CardActions>
              <TextField multiline fullWidth label="Type some text..." placeHolder=""/>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}