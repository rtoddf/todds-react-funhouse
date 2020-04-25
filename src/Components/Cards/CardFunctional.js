import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import image from "../../static/images/cards/comics-kevin-keller.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px auto"
  },
  media: {
    height: 170,
  },
});


const Card01 = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ image }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" color="primary">
            Kevin Keller
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Kevin Keller is a fictional character in the Archie Comics universe. He premiered in Veronica #202, published in September 2010.  Created by writer/artist Dan Parent, Kevin is the first openly gay character in Archie Comics history.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  )
}

export default Card01;