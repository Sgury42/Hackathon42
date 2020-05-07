
import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Grid, Chip, Card, CardContent, TextField, CardHeader, CardActions, Button } from '@material-ui/core'
import { TextLink, MyTypography, Icon, BlockLink } from '../core'
import { Avatar, PostItem } from './'

export default () => {
  const problems = useSelector(s => s.objects.group.problems)
  const theme = useTheme()
  return (
    <React.Fragment>
      <MyTypography variant="h6" style={{ marginBottom: theme.spacing(1), color: '#f44336' }} medium>😞 Problems</MyTypography>
      <Grid container spacing={1}>
        {problems.map((problem, i) => (
          <Grid item xs={12} key={i}>
            <PostItem post={problem}/>
          </Grid>
        ))}
      </Grid>
      <Button fullWidth variant="contained" color="primary" style={{ marginTop: theme.spacing(1) }}>I have a problem</Button>
    </React.Fragment>
  )
}