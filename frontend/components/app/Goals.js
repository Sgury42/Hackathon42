
import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Grid, Chip, Card, CardContent, TextField, CardHeader, CardActions, Button } from '@material-ui/core'
import { TextLink, MyTypography, Icon, BlockLink } from '../core'
import { Avatar, PostItem } from './'

export default () => {
  const goals = useSelector(s => s.objects.group.goals)
  const theme = useTheme()
  return (
    <React.Fragment>
      <MyTypography variant="h6" style={{ marginBottom: theme.spacing(1), color: '#ff9800' }} medium>⭐ Goals</MyTypography>
      <Grid container spacing={1}>
        {goals.map((goal, i) => (
          <Grid item xs={12} key={i}>
            <PostItem post={goal}/>
          </Grid>
        ))}
      </Grid>
      <Button fullWidth variant="contained" color="primary" style={{ marginTop: theme.spacing(1) }}>I have a new goal</Button>
    </React.Fragment>
  )
}