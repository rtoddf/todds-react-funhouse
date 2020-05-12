import React from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridItem: {
      display: "flex",
    },
  }));
  
const UIControlsCardFunctional = props => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            UI Controls
        </Grid>
    )
}

export default UIControlsCardFunctional;