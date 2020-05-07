import React from "react";
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const data = [
  {
    title: 'Word of the Day',
    word: 'lorn',
    type: 'adjective',
    pronunced: "lorn",
    meaning: ': left alone and forlorn : desolate, forsaken',
    usage: 'It is a lorn place, and the wind has grown shrill, and we come home feeling rather desolate.',
  },
  {
    title: 'Word of the Day',
    word: 'quin-tess-ence',
    type: 'noun',
    pronunced: "kwin-TESS-unss",
    meaning: ': the most typical example or representative',
    usage: 'Roasting marshmallows over an open fire and making s\'mores is the quintessence of camping in the great outdoors.',
  },
  {
    title: 'Word of the Day',
    word: 'truck-le',
    type: 'verb',
    pronunced: "TRUK-ul",
    meaning: ': to act in a subservient manner : submit',
    usage: 'Walt Whitman became a pop star for reminding his countrymen of the duty never to truckle: \"Take off your hat to nothing known or unknown or to any man or number of men.\"',
  },
  {
    title: 'Word of the Day',
    word: 'co-lli-mate',
    type: 'verb',
    pronunced: "KAH-luh-mayt",
    meaning: ': to make parallel',
    usage: 'Amazingly, some astrophysical jets—streams of charged particles collimated and accelerated over astronomical distances—also exhibit a helical structure.',
  }
];
// https://dictionaryapi.com/

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: theme.palette.primary.main,
    shadow: theme.shadows[5]
  },
  gridItem: {
    display: "flex",
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
  }
}));

const SimpleCardFunctional = props => {
  const classes = useStyles();
  const { loading = false } = props;

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
    <Grid container spacing={2}>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
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
        </Grid>
      ))}
    </Grid>
  )
}

export default SimpleCardFunctional;