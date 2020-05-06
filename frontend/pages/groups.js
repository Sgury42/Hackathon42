import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Avatar, Grid, Chip, Card, CardContent } from '@material-ui/core'
import { TextLink, MyTypography, Icon } from '../components/core'

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
                <TextLink href="/group" medium>{group.name}</TextLink>
                <MyTypography variant="body2" color="textSecondary">{group.description}</MyTypography>
                <Grid container spacing={1} style={{ marginTop: theme.spacing(1) }}>
                  {group.tags.map(tag => (
                    <Grid item>
                      <Chip icon={<Icon name="mdiCircleMedium"/>} label={tag.label} style={{ background: tag.color, color: theme.palette.getContrastText(tag.color) }}/>
                    </Grid> 
                  ))}
                </Grid>
                <Grid container spacing={1} style={{ marginTop: theme.spacing(1) }}>
                  {group.users.map(user => (
                    <Grid item>
                      <Avatar style={{ width: 32, height: 32 }}>{user.firstname.charAt(0)}</Avatar>
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