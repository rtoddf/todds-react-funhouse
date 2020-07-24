import React from "react";
import Items from "./Items";
import Detail from "./Detail";
import AddNew from "../../Common/AddNew";
import { Button, Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { livestreams } from "../../data/OttMenu";

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

const LiveStreams = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false)

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography>OTT menu</Typography>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.root}>
        {/* Livestreams */}
        <Grid container spacing={2}>
          <Grid item md={4}>
            <AddNew type="menu" />
            <Items items={livestreams} setSelected={setSelected} />
          </Grid>
          <Grid item xs={12} md={4}>
            {selected && (
              <Detail item={selected} />
            )}
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.root}>
        {/* save/cancel buttons */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item md={6} className={classes.centered}>
                <Button className={classes.button}>
                    Cancel
                </Button>
              </Grid>
              <Grid item md={6} className={classes.centered}>
                <Button className={classes.button}>
                    Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default LiveStreams;