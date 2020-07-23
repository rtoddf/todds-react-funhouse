import React from "react";
import Sections from "./Sections";
import AddNew from "../../Common/AddNew";
import { Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { mobileHomeScreenSections } from "../../data/MobileHomeScreen";

const useStyles = makeStyles((theme) => ({
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
}));

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography>Mobile Home Screen</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <AddNew type="section" />
          <Sections sections={mobileHomeScreenSections} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomeScreen;