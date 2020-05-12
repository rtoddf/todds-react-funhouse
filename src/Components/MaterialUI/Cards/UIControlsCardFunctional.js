import React from "react";
import UIControlCard from "./UIControlsCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { music01 } from "../../../data/Music";

const useStyles = makeStyles(() => ({
  gridItem: {
    display: "flex",
  }
}));
  
const UIControlsCardFunctional = () => {
    const classes = useStyles();
    // const theme = useTheme();

    return (
      <Grid container spacing={2}>
        {music01.map((item, index) => (
          <Grid key={index} item xs={12} md={4} className={classes.gridItem}>
            <UIControlCard item={item} />
          </Grid>
        ))}
      </Grid>
    )
}

export default UIControlsCardFunctional;