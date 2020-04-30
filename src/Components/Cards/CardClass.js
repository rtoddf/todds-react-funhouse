import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from "@material-ui/core/styles";

import image from "../../static/images/cards/comics-kevin-keller.jpg";

const styles = {
    root: {
      maxWidth: 345,
      margin: "10px auto"
    },
    media: {
      height: 170,
    },
    formControl: {
      margin: "5px auto"
    },
  };


class CardClass extends React.Component {
  state = {
    subscribe: false
  }

  handleChange = (event) => {
    this.setState({subscribe: event.target.checked})
  };

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
            <Typography gutterBottom variant="h3" color="primary">
              Kevin Keller
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Kevin Keller is a fictional character in the Archie Comics universe. He premiered in Veronica #202, published in September 2010.  Created by writer/artist Dan Parent, Kevin is the first openly gay character in Archie Comics history.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={this.state.subscribe} onChange={this.handleChange} name="subscribe" />}
                label={!this.state.subscribe ? "Sign up" : "Subscribed"}
              />
            </FormGroup>
          </FormControl>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(CardClass);