import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  progress: {
    color: theme.palette.quaternary.main,
  }
}));

const CircularFunctional = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} className={classes.gridItem}>
        <CircularProgress />
      </Grid>
      <Grid item xs={2} className={classes.gridItem}>
        <CircularProgress className={classes.progress} size={36} />
      </Grid>
    </Grid>
  );
}

export default CircularFunctional;