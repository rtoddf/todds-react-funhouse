import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grow, FormControlLabel, Grid, Paper, Switch } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
  },
  holder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
  },
  polygon: {
    fill: theme.palette.primary.main,
    stroke: theme.palette.primary.dark,
    strokeWidth: 1,
  },
  icon: {
    ...theme.icon.default,
    color: theme.palette.primary.main,
    stroke: theme.palette.primary.dark,
    strokeWidth: 0.5,
  },
  iconLg: {
    ...theme.icon.iconLg,
    width: 150,
    height: 150,
  },
  iconXl: {
    ...theme.icon.iconLg,
    width: 150,
    height: 150,
  },
}));

const GrowFunctional = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.gridItem}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
      </Grid>
      <Grid item xs={3} className={classes.gridItem}>
        <Grow in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.holder}>
              <polygon points="25,125 75,25, 125,125" className={classes.polygon} />
            </svg>
          </Paper>
        </Grow>
      </Grid>
      <Grid item xs={3} className={classes.gridItem}>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper elevation={4} className={classes.paper}>
            <div className={classes.svg}>
              <AppleIcon className={[classes.icon, classes.iconLg].join(' ')} />
            </div>
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  )
}

export default GrowFunctional;