import React from "react";
import { Button, Card, CardContent, CardHeader, Container, Grid, TextField, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { ottGlobalConfig } from "../../data/OttGlobalConfig";

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

const GlobalConfig = () => {;
  const classes = useStyles();

  const configItemsStructure = ottGlobalConfig.map((item, i) => {
    return(
      <>
        Field
      </>
    );
  });

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="h3" gutterBottom>
              OTT Global Config
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Card>
              {/* <CardHeader
                classes=""
                title={ `Editing ${title}` }
              /> */}
              <CardContent>
                {configItemsStructure}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item md={3} className={classes.centered}>
            <Button className={classes.button}>
                Cancel
            </Button>
          </Grid>
          <Grid item md={3} className={classes.centered}>
            <Button className={classes.button}>
                Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default GlobalConfig;