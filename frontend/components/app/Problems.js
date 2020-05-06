
import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme, Container, Grid, Chip, Card, CardContent, TextField, CardHeader, CardActions, Button } from '@material-ui/core'
import { TextLink, MyTypography, Icon, BlockLink } from '../core'
import { Avatar } from './'

export default () => {
  const problems = useSelector(s => s.objects.group.problems)
  const theme = useTheme()
  return (
    <React.Fragment>
      <MyTypography variant="h6" style={{ marginBottom: theme.spacing(2) }} medium>😞 Problems</MyTypography>
      <Grid container spacing={1}>
        {problems.map(problem => (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <div style={{ display: 'flex'}}>
                  <Avatar user={problem.owner}/>
                  <div style={{ flexGrow: 1, marginLeft: theme.spacing(1) }}>
                    <MyTypography medium>{problem.name}</MyTypography>
                    <MyTypography variant="body2">{problem.description}</MyTypography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField multiline fullWidth label="Explain your problem..." placeHolder=""/>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary">Send</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}