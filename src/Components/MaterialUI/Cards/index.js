import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SimpleCardFunctional from "./SimpleCardFunctional";
import CardFunctional from "./MediaCardFunctional";
import CardClass from "./MediaCardClass";

import { PageHeading, SectionHeading } from "../../Common";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Cards = props => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <PageHeading title="Material-UI Cards" />

            <SectionHeading title="Simple Card" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SimpleCardFunctional />
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>

            {/* <SectionHeading title="Complex Interaction Card" /> */}

            <SectionHeading title="Media Card" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardFunctional />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardClass />
                </Grid>
            </Grid>

            {/* <SectionHeading title="UI Controls" /> */}
        </Container>
    )
}

export default Cards;