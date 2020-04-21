import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import image from "../static/images/cards/comics-kevin-keller.jpg";

const styles = {
    root: {
      maxWidth: 345,
      margin: "10px auto"
    },
    media: {
      height: 170,
    },
  };


class CardClass extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={ image }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Kevin Keller
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Kevin Keller is a fictional character in the Archie Comics universe. He premiered in Veronica #202, published in September 2010.  Created by writer/artist Dan Parent, Kevin is the first openly gay character in Archie Comics history.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default withStyles(styles)(CardClass);