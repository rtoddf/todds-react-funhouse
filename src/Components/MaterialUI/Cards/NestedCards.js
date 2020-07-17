import React from "react";
import { Grid } from '@material-ui/core';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { structure } from "../../../data/AMS";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
  },
  root: {
    width: "100%",
    margin: "10px auto",
    shadow: theme.shadows[5]
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  cardHeaderTitle: {
      fontSize: "18px"
  },
  cardHeaderSubheader: {
      color: theme.palette.common.white,
  },
}));

const NestedCards = props => {
  const classes = useStyles();

  const outsideCards = structure.map((item, i) => {
    return (
      <Grid key={i} item xs={12} md={6} className={classes.gridItem}>
        <Card className={classes.root}>
          <CardHeader
              classes={{ root: classes.cardHeader, title: classes.cardHeaderTitle, subheader: classes.cardHeaderSubheader }}
              avatar={
                  <Avatar className={classes.avatar}>
                  TV
                  </Avatar>
              }
              title={ item.title }
              subheader={ item.source }
          />
          <CardContent>
            <Grid container spacing={2}>
              {item.options.map((option, j) => (
                <Grid key={j} item xs={12} md={6} className={classes.gridItem}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.bio} variant="body2">
                          { option.heading }
                      </Typography>
                      <Typography className={classes.bio} variant="body2">
                          { option.description }
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  });

  return (
    <Grid container spacing={2}>
      {outsideCards}
    </Grid>
  )
}

export default NestedCards;