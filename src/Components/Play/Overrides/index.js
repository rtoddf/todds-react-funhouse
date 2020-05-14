import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../../Common";

const useStyles = makeStyles((theme) => ({
  
}));

const Overrides = () => {
  const classes = useStyles();

    return (
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <PageHeading title="Play - Overrides" />
          <Grid item xs={12} md={6}>
            
          </Grid>
          <Grid item xs={12} md={6}>
            
          </Grid>
        </Grid>
      </Container>
    )
}

export default Overrides;