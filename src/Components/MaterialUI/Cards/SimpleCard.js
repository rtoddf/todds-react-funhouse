import React from "react";
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      backgroundColor: theme.palette.primary.main,
      shadow: theme.shadows[5]
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      color: theme.palette.primary.light,
      fontSize: 14,
    },
    word: {
      color: theme.palette.primary.contrastText,
    },
    partOfSpeech: {
      marginBottom: 12,
      color: theme.palette.primary.light,
    },
    definition: {
      color: theme.palette.primary.contrastText,
    },
    usage: {
      color: theme.palette.primary.light,
      fontStyle: "italic"
    }
}));

const SimpleCard = props => {
    const classes = useStyles();
    const { item }  = props;

    // this can be a helper function
    const flatMap = (array, fn) => {
        var result = [];
        for (var i = 0; i < array.length; i++) {
        var mapping = fn(array[i]);
        result = result.concat(mapping);
        }
        return result;
    }

    const replaceBullet = (word) => {
        var result = word;
        result = flatMap(result.split('-'), function (part) {
        return [part, <span className={classes.bullet}>•</span>];
        });
        // Remove the last spacer
        result.pop();
        return <>{result}</>;
    };

    return (
    <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} gutterBottom={true}>
                {item.title}
            </Typography>
            <Typography className={classes.word} variant="h5">
                {replaceBullet(item.word)}
            </Typography>
            <Typography variant="subtitle2" className={classes.partOfSpeech} gutterBottom={true}>
                {item.type}
            </Typography>
            <Typography className={classes.definition} variant="body1">
                {item.meaning}
            </Typography>
            <Typography className={classes.usage} variant="body2">
                {item.usage}
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
    )
}

export default SimpleCard;