import React from "react";
import { Grid } from '@material-ui/core';
import CardFunctional from "../Cards/CardFunctional";
import CardClass from "../Cards/CardClass";

const Cards = props => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardFunctional />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardClass />
                </Grid>
            </Grid>
        </>
    )
}

export default Cards;