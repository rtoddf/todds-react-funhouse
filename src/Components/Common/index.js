import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export function PageHeading (props) {
    const classes = useStyles();

    return (<Typography variant="h2" gutterbottom>{props.title}</Typography>)
}

export function SectionHeading (props) {
    const classes = useStyles();

    return (<Typography variant="h4" gutterbottom>{props.title}</Typography>)
}