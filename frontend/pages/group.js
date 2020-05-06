import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Grid, Chip, Card, CardContent, TextField, CardHeader, CardActions, Button } from '@material-ui/core'
import { TextLink, MyTypography, Icon, BlockLink } from '../components/core'
import { Problems, Goals, Avatar } from '../components/app'

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
                      <Avatar user={user}/>
                    </BlockLink>
                  </Grid> 
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Goals/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Problems/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardContent>
              <MyTypography variant="h6" medium>💬 Chat</MyTypography>
            </CardContent>
            <CardActions>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField multiline fullWidth label="Type some text..." placeHolder=""/>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" color="primary">Send</Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}