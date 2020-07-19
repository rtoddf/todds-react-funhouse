/* eslint-disable react/jsx-key */
import React from "react";
import MainMenu from './MainMenu';
import { Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { mobileMenu } from "../../data/MobileMenu";

const useStyles = makeStyles((theme) => ({
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography>Mobile Menu</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <MainMenu mobileMenu={mobileMenu} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Menu;