
import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Grid, Chip, Card, CardContent, TextField, CardHeader, CardActions, Button } from '@material-ui/core'
import { TextLink, MyTypography, Icon, BlockLink } from '../core'
import { Avatar } from './'

export default () => {
  const goals = useSelector(s => s.objects.group.goals)
  const theme = useTheme()
  return (
    <React.Fragment>
      <MyTypography variant="h6" style={{ marginBottom: theme.spacing(2) }} medium>⭐ Goals</MyTypography>
      <Grid container spacing={1}>
        {goals.map(goal => (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <div style={{ display: 'flex'}}>
                  <Avatar user={goal.owner}/>
                  <div style={{ flexGrow: 1, marginLeft: theme.spacing(1) }}>
                    <MyTypography medium>{goal.name}</MyTypography>
                    <MyTypography variant="body2">{goal.description}</MyTypography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField multiline fullWidth label="What is your current goal ?" placeHolder=""/>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Deadline (MM/DD/YYYY)" placeHolder=""/>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}