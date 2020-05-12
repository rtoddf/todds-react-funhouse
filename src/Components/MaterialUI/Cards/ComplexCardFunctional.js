import React from "react";
import ComplexCard from "./ComplexCard";
import { Grid } from "@material-ui/core";
import { comics } from "../../../data";

const ComplexCardFunctional = props => {
  return (
    <Grid container spacing={2}>
      
      {comics.map((item, index) => (
        <Grid item key={index} xs={12} md={3}>
          <ComplexCard item={item} index={index} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ComplexCardFunctional;