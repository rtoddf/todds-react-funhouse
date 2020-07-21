import React from "react";
import LiveStreams from "./LiveStreams";
import { Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { mobileLiveStreams } from "../../data/MobileLiveStreams";

const useStyles = makeStyles((theme) => ({
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
}));

const Livestream = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography>Mobile Livestreams</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <LiveStreams streams={mobileLiveStreams} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Livestream;