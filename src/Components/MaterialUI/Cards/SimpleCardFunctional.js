import React from "react";
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const data = [
  {
    title: 'Word of the Day',
    word: 'be-nev-o-lent',
    type: 'adjective',
    meaning: 'well meaning and kindly.',
    usage: 'a benevolent smile',
  },
  {
    title: 'Word of the Day',
    word: 'be-nev-o-lent',
    type: 'adjective',
    meaning: 'well meaning and kindly.',
    usage: 'a benevolent smile',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const SimpleCardFunctional = props => {
  const classes = useStyles();
  const { loading = false } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={2}>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                a benevolent smile
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default SimpleCardFunctional;