import React from "react";
import { Grid } from "@material-ui/core";
import ImageAvatar from "./ImageAvatar";
import { makeStyles } from "@material-ui/core/styles";

import { quotes } from "../../../data/Quotes";

const useStyles = makeStyles(theme => ({
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
    avatarXl: {
        ...theme.avatar.avatarXl,
    },
}));

const ImageAvatarFunctional = () => {
    const classes = useStyles();
    const showName = true;
    const classNames = [classes.avatar, classes.avatarXl];

    return (
        <Grid container spacing={2}>
            {quotes.map((item, index) => (
                <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
                    <ImageAvatar item={item} showName={showName} classNames={classNames} />
                </Grid>
            ))}
        </Grid>
  )
}

export default ImageAvatarFunctional;