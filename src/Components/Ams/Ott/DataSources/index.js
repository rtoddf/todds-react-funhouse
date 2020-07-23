import React from "react";
import Sources from "./Sources";
import AddNew from "../../Common/AddNew";
import Edit from "./Edit";
import { Button, Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { ottDataSources } from "../../data/OttDataSources";

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

const DataSources = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false)

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography>OTT Datasources</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <AddNew type="source" />
          <Sources sources={ottDataSources} setSelected={setSelected} />
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
        <Grid item xs={12} md={4}>
          {selected && (
            <Edit item={selected}/>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default DataSources;