import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from "@material-ui/core/styles";

import { quotes } from "../../../data/Quotes";

const useStyles = makeStyles((theme) => ({

}));

const GroupedFunctional = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {quotes.map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
          something
        </Grid>
      ))}
    </Grid>
  )
}

export default GroupedFunctional;