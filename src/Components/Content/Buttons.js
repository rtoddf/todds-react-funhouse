import React from "react";
import { Grid } from "@material-ui/core";
import ButtonFcuntional from "../Buttons/ButtonFunctional";
import ButtonClass from "../Buttons/ButtonFunctional";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Buttons = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <ButtonFcuntional />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ButtonClass />
                </Grid>
            </Grid>
        </div>
    )
}

export default Buttons;