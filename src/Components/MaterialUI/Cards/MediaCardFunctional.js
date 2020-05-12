import React from "react";
import MediaCard from "./MediaCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { comics01 } from "../../../data/Comics";

const useStyles = makeStyles(() => ({
  gridItem: {
    display: "flex",
  },
}));

const MediaCardFunctional = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {comics01.map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
          <MediaCard item={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MediaCardFunctional;