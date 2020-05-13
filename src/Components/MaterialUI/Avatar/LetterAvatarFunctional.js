import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { quotes } from "../../../data/Quotes";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    ...theme.avatar.default,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.dark,
  },
  avatarSm: {
    ...theme.avatar.avatarSm,
  },
  avatarMd: {
    ...theme.avatar.avatarMd,
  },
  avatarLg: {
    ...theme.avatar.avatarLg,
  },
  avatarXl: {
    ...theme.avatar.avatarXl,
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
          <Avatar className={[classes.avatar, classes.avatarLg].join(' ')}>{getInitials(item.author)}</Avatar>
        </Grid>
      ))}
    </Grid>
  )
}

export default LetterAvatarFunctional;