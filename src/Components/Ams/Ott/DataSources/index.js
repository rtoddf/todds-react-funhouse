import React from "react";
import Sources from "./Sources";
import AddNew from "../Common/AddNew";
import { Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { ottDataSources } from "../../data/OttDataSources";

const useStyles = makeStyles((theme) => ({
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
}));

const DataSources = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography>OTT Datasources</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <AddNew type="source" /> */}
          <Sources sources={ottDataSources} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default DataSources;