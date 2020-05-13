import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AddBoxIcon from '@material-ui/icons/AddBox';
// https://material-ui.com/components/material-icons/

const useStyles = makeStyles((theme) => ({
  avatar: {
    ...theme.avatar.default,
    color: theme.palette.quaternary.contrastText,
    backgroundColor: theme.palette.quaternary.main,
    borderColor: theme.palette.quaternary.dark,
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
  icon: {
    ...theme.icon.default,
  },
  iconSm: {
    ...theme.icon.iconSm,
  },
  iconMd: {
    ...theme.icon.iconMd,
  },
  iconLg: {
    ...theme.icon.iconLg,
  },
  iconXl: {
    ...theme.icon.iconXl,
  }
}));

const IconAvatarFunctional = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} className={classes.gridItem}>
          <Avatar className={[classes.avatar, classes.avatarLg].join(' ')}>
            <FolderIcon className={[classes.icon, classes.iconLg].join(' ')} />
          </Avatar>
      </Grid>
      <Grid item xs={12} md={3} className={classes.gridItem}>
        <Avatar className={[classes.avatar, classes.avatarLg].join(' ')}>
          <PageviewIcon className={[classes.icon, classes.iconLg].join(' ')} />
        </Avatar>
      </Grid>
      <Grid item xs={12} md={3} className={classes.gridItem}>
        <Avatar className={[classes.avatar, classes.avatarLg].join(' ')}>
          <FormatQuoteIcon className={[classes.icon, classes.iconLg].join(' ')} />
        </Avatar>
      </Grid>
      <Grid item xs={12} md={3} className={classes.gridItem}>
        <Avatar className={[classes.avatar, classes.avatarLg].join(' ')}>
          <AddBoxIcon className={[classes.icon, classes.iconLg].join(' ')} />
        </Avatar>
      </Grid>
    </Grid>
  )
}

export default IconAvatarFunctional;