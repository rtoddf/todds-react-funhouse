import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

}));

const VariantsFunctional = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} className={classes.gridItem}>
        something
      </Grid>
    </Grid>
  )
}

export default VariantsFunctional;