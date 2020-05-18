import React from "react";
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  progress: {
    color: theme.palette.quaternary.main,
  }
}));

const CircularDeterminateFunctional = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} className={classes.gridItem}>
        <CircularProgress variant="determinate" value={progress} />
      </Grid>
      <Grid item xs={2} className={classes.gridItem}>
        <CircularProgress variant="determinate" value={progress} className={classes.progress} />
      </Grid>
    </Grid>
  )
}

export default CircularDeterminateFunctional;