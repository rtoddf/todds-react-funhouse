import React from "react";
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const data = [
  {
    title: 'Word of the Day',
    word: 'Lorn',
    type: 'adjective',
    pronunced: "lorn",
    meaning: 'left alone and forlorn : desolate, forsaken.',
    usage: 'It is a lorn place, and the wind has grown shrill, and we come home feeling rather desolate.',
  },
  {
    title: 'Word of the Day',
    word: 'quin-tess-ence',
    type: 'noun',
    pronunced: "kwin-TESS-unss",
    meaning: 'the most typical example or representative.',
    usage: 'Roasting marshmallows over an open fire and making s\'mores is the quintessence of camping in the great outdoors.',
  },
  {
    title: 'Word of the Day',
    word: 'be-nev-o-lent',
    type: 'adjective',
    pronunced: "kwin-TESS-unss",
    meaning: 'well meaning and kindly.',
    usage: 'a benevolent smile',
  },
  {
    title: 'Word of the Day',
    word: 'be-nev-o-lent',
    type: 'adjective',
    pronunced: "kwin-TESS-unss",
    meaning: 'well meaning and kindly.',
    usage: 'a benevolent smile',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.tertiary.contrastText
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const SimpleCardFunctional = props => {
  const classes = useStyles();
  const { loading = false } = props;

  const flatMap = (array, fn) => {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      var mapping = fn(array[i]);
      result = result.concat(mapping);
    }
    return result;
  }

  const replaceBullet = (word) => {
    // console.log("word: ", word);
    // return word.replace(/-/g, "•");

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
        <Grid item key={index} xs={12} md={3}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom={true}>
                {item.title}
              </Typography>
              <Typography variant="h5" component="h2">
                {replaceBullet(item.word)}
                {/* be{bull}nev{bull}o{bull}lent */}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {item.type}
              </Typography>
              <Typography variant="body2" component="p">
                {item.meaning}
                <br />
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