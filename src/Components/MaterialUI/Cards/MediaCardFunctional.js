import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const data = [
  {
    name: "Deadpool",
    media: "http://www.rtodd.net/images/comics-deadpool01.jpg",
    bio: "Deadpool, whose real name is Wade Wilson, is a disfigured mercenary with the superhuman ability of an accelerated healing factor and physical prowess. The character is known as the /'Merc with a Mouth/' because of his tendency to talk and joke constantly, including breaking the fourth wall for humorous effect and running gags.",
  },
  {
    name: "Iceman",
    media: "http://www.rtodd.net/images/comics-iceman.jpg",
    bio: "Iceman is a mutant born with superhuman abilities. He has the ability to manipulate ice and cold by freezing water vapor around him. This allows him to freeze objects, as well as turn his body into ice.",
  },
  {
    name: "John Constantine",
    media: "http://www.rtodd.net/images/comics-john-constantine.jpg",
    bio: "The titular Hellblazer, Constantine is a working class warlock, occult detective and con man stationed in London. He is known for his endless cynicism, deadpan snarking, ruthless cunning and constant chain smoking, but he's also a passionate humanitarian driven by a heartfelt desire to do some good in his life.",
  },
  {
    name: "Kevin Keller",
    media: "http://www.rtodd.net/images/comics-kevin-keller.jpg",
    bio: "Kevin Keller is a fictional character in the Archie Comics universe. He premiered in Veronica #202, published in September 2010.  Created by writer/artist Dan Parent, Kevin is the first openly gay character in Archie Comics history.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px auto",
    shadow: theme.shadows[5],
  },
  gridItem: {
    display: "flex",
  },
  media: {
    height: 170,
  },
  formControl: {
    margin: "5px auto"
  },
}));

const MediaCardFunctional = props => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Grid container spacing={2}>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={ item.media }
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom={true} variant="h3" color="primary">
                  { item.name }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                { item.bio }
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default MediaCardFunctional;




  // const [state, setState] = React.useState({
  //   subscribe: false
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  // const { subscribe } = state;

  {/* <CardActions>
    <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={subscribe} onChange={handleChange} name="subscribe" />}
          label="Sign Up"
        />
      </FormGroup>
    </FormControl>
  </CardActions> */}