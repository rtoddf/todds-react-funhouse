import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from "@material-ui/core/styles";

import { quotes } from "../../../data/Quotes";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatarSm: {
      ...theme.avatar.avatarSm,
  },
  avatarMd: {
      ...theme.avatar.avatarMd,
  },
  avatarLg: {
      ...theme.avatar.avatarLg,
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: theme.palette.primary.main
  },
  avatarXl: {
      ...theme.avatar.avatarXl,
  },
}));

const GroupedFunctional = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} className={classes.gridItem}>
        <AvatarGroup max={6}>
          {quotes.map((item, index) => (
            <Avatar key={index} alt={item.author} src={item.media} className={classes.avatarLg} />
          ))}
        </AvatarGroup>
      </Grid>
    </Grid>
  )
}

export default GroupedFunctional;