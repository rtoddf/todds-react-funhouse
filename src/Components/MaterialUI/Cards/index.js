import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CardFunctional from "./CardFunctional";
import CardClass from "./CardClass";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Cards = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardFunctional />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardClass />
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;