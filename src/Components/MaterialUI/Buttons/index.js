import React from "react";
import { Grid } from "@material-ui/core";
import ButtonFunctional from "./ButtonFunctional";
import ButtonClass from "./ButtonClass";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridItemCenter: {
        textAlign: "center"
    }
}));

const Buttons = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={6} className={classes.gridItemCenter}>
                    <ButtonFunctional />
                </Grid>
                <Grid item xs={12} md={6} className={classes.gridItemCenter}>
                    <ButtonClass />
                </Grid>
            </Grid>
        </div>
    )
}

export default Buttons;