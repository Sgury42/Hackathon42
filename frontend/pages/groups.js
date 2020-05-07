import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Grid, Chip, Card, CardContent } from '@material-ui/core'
import { TextLink, MyTypography, Icon } from '../components/core'
import { Tags, Avatar } from '../components/app'

export default () => {
  const theme = useTheme()
  const groups = useSelector(s => s.lists.groups)
  return (
    <Container>
      <Grid container spacing={2}>
        {groups.data.map(group => (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <TextLink variant="h5" href="/group" medium>{group.name}</TextLink>
                <MyTypography variant="body2" color="textSecondary">{group.description}</MyTypography>
                <Tags tags={group.tags} style={{ marginTop: theme.spacing(1) }}/>
                <Grid container spacing={1} style={{ marginTop: theme.spacing(1) }}>
                  {group.users.map(user => (
                    <Grid item>
                      <Avatar user={user} size={28}/>
                    </Grid> 
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}