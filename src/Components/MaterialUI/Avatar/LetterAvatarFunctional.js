import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { quotes } from "../../../data/Quotes";

const useStyles = makeStyles((theme) => ({
  gridItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: "20px auto 5px",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[3],
    fontWeight: 600
  },
  sm: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: ".75rem",
  },
  md: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    fontSize: "1rem",
  },
  lg: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    fontSize: "2rem",
  },
  xl: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize: "4rem",
  },
}));

const LetterAvatarFunctional = () => {
  const classes = useStyles();

  const getInitials = (name) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0];
  }

  return (
    <Grid container spacing={2}>
      {quotes.map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
          <Avatar className={[classes.avatar, classes.lg].join(' ')}>{getInitials(item.author)}</Avatar>
        </Grid>
      ))}
    </Grid>
  )
}

export default LetterAvatarFunctional;