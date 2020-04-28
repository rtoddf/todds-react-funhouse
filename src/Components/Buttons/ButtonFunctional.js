import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 48,
        padding: '0 30px',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        border: 0,
        borderRadius: 3,
        // boxShadow: `0 3px 5px 2px ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[1],
    }
}));

export default function HookButton() {
    const classes = useStyles();
    return <Button className={classes.root}>Magic Button</Button>
}