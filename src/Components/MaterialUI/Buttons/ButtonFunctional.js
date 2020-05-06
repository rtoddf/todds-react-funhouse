import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        ...theme.button,
        boxShadow: theme.shadows[1],
    },
}));

export default function HookButton() {
    const classes = useStyles();
    return <Button className={classes.button}>Functional Button</Button>
}