import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../Common";
import Cards from "./Cards";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Components = props => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <PageHeading title="Material-UI Components" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Cards />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Buttons />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Components;