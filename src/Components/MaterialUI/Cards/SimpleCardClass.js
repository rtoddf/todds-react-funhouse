import React from "react";
import { Grid } from '@material-ui/core';
import SimpleCard from "./SimpleCard";
import { withStyles } from "@material-ui/core/styles";
import { wordOfTheDay } from "../../../data";

const styles = () => ({
  gridItem: {
    display: "flex",
  },
});

class SimpleCardClass extends React.Component {
  render(){
    // const classes = this.props;

    return (
      <Grid container spacing={2}>
        {wordOfTheDay.map((item, index) => (
          <Grid item key={index} xs={12} md={3} className={this.props.classes.gridItem}>
            <SimpleCard item={item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default withStyles(styles)(SimpleCardClass);