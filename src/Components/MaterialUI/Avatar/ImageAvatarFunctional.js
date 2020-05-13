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
    author: {
        color: theme.palette.primary.main,
        fontWeight: 500
    }
}));

const ImageAvatarFunctional = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            {quotes.map((item, index) => (
                <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
                    <Avatar alt={item.author} src={item.media} className={[classes.avatar, classes.avatarLg].join(' ')} />
                    <Typography className={classes.author} variant="body1">{item.author}</Typography>
                </Grid>
            ))}
        </Grid>
  )
}

export default ImageAvatarFunctional;