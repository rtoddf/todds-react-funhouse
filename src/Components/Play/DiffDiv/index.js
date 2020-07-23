import React from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../../Common";

const useStyles = makeStyles((theme) => ({
  
}));

const Overrides = () => {
  const classes = useStyles();

    return (
      <Container className={classes.root}>
        <PageHeading title="Play - Diff Div" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Link href="https://material-ui.com/" target="_blank" rel="noreferrer">
                Material-UI
            </Link>
            <Link href="https://gist.github.com/mannyblum/e60d4b4bf25bdd6b0bb47ce563431625" target="_blank" rel="noreferrer">
                Sample Create Theme - Manny
            </Link>
            <Link href="https://color.adobe.com/mythemes" target="_blank" rel="noreferrer">
                Adobe Color - My Themes
            </Link>
            <Link href="https://danilowoz.com/create-content-loader/" target="_blank" rel="noreferrer">
                Create Content Loader
            </Link>
            <Link href="https://material-ui.com/components/material-icons/" target="_blank" rel="noreferrer">
                Material Icons
            </Link>
            <Link href="https://material-ui.com/components/material-icons/" target="_blank" rel="noreferrer">
                Material Icons
            </Link>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    )
}

export default Overrides;