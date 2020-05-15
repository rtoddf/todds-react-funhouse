import React from "react";
import { Badge, Grid } from "@material-ui/core";
import AppleIcon from '@material-ui/icons/Apple';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    ...theme.icon.default,
    color: theme.palette.quinary.main,
  },
  iconLg: {
    ...theme.icon.iconLg,
  },
}));

const BasicBadgesFunctional = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={1}>
        <Badge badgeContent={4} color="primary">
          <AppleIcon className={[classes.icon, classes.iconLg].join(' ')} />
        </Badge>
      </Grid>
      <Grid item xs={12} md={1}>
        <Badge badgeContent={4} color="primary">
          <AppleIcon className={[classes.icon, classes.iconLg].join(' ')} />
        </Badge>
      </Grid>
      <Grid item xs={12} md={1}>
        <Badge badgeContent={4} color="primary">
          <AppleIcon className={[classes.icon, classes.iconLg].join(' ')} />
        </Badge>
      </Grid>
    </Grid>
  );
}

export default BasicBadgesFunctional;