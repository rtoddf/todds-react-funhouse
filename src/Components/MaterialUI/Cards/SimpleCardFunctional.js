import React from "react";
import SimpleCard from "./SimpleCard";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { wordOfTheDay } from "../../../data";
// https://dictionaryapi.com/

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
  },
}));

const SimpleCardFunctional = props => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {wordOfTheDay.map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
          <SimpleCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default SimpleCardFunctional;