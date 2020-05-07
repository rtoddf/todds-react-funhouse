import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import image from "../../../static/images/cards/comics-kevin-keller.jpg";

const useStyles = makeStyles((theme) => ({
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
}));


const Card01 = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    subscribe: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { subscribe } = state;
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ image }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom={true} variant="h3" color="primary">
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
              control={<Checkbox checked={subscribe} onChange={handleChange} name="subscribe" />}
              label="Sign Up"
            />
          </FormGroup>
        </FormControl>
      </CardActions>
    </Card>
  )
}

export default Card01;