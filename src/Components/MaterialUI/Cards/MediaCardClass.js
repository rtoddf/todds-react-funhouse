import React from "react";
import MediaCard from "./MediaCard";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { comics } from "../../../data";

const styles = theme => ({
  gridItem: {
    display: "flex",
  },
});


class MediaCardClass extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={2}>
        {comics.map((item, index) => (
          <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
            <MediaCard item={item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default withStyles(styles)(MediaCardClass);