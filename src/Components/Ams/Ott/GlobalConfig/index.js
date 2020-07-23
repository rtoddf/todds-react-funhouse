import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      width: "100%",
      margin: "10px auto",
  },
  button: {
    ...theme.button,
    marginBottom: '20px',
    boxShadow: theme.shadows[1],
  },
  centered: {
    textAlign: "center"
  }
}));

const GlobalConfig = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false)

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" gutterBottom>
            OTT Global Config
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GlobalConfig;