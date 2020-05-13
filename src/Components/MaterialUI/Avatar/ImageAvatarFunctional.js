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
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: "20px auto 5px",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        boxShadow: theme.shadows[3]
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
                    <Avatar alt={item.author} src={item.media} className={classes.large} />
                    <Typography className={classes.author} variant="body1">{item.author}</Typography>
                </Grid>
            ))}
        </Grid>
  )
}

export default ImageAvatarFunctional;