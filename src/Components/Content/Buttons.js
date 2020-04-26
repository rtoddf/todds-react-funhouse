import React from "react";
import { Grid } from "@material-ui/core";
import ButtonFcuntional from "../Buttons/ButtonFunctional";
import ButtonClass from "../Buttons/ButtonFunctional";

const Buttons = props => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ButtonFcuntional />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ButtonClass />
                </Grid>
            </Grid>
        </>
    )
}

export default Buttons;