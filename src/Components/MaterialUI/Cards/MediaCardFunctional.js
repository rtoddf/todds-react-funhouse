import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const data = [
  {
    name: "Deadpool",
    source: "Marvel Comics",
    media: "http://www.rtodd.net/images/comics-deadpool01.jpg",
    bio: "<p>Deadpool, whose real name is Wade Wilson, is a disfigured mercenary with the superhuman ability of an accelerated healing factor and physical prowess.</p><p>The character is known as the &#34;Merc with a Mouth&#34; because of his tendency to talk and joke constantly, including breaking the fourth wall for humorous effect and running gags.</p>",
    moreBio: "Deadpool is aware that he is a fictional comic book character. He commonly breaks the fourth wall, which is done by few other characters in the Marvel Universe, and this is used to humorous effect. He often has conversations with his two internal monologues, which are shown as caption boxes in his panels; in Deadpool Annual #1 (2014) it is revealed that Madcap, a foe of Captain America, is the psychotic voice appearing in white captions with a typewriter serif; the other voice is unidentified and often mistakenly attributed to Dr. Bong, Deadpool's former psychiatrist.",
  },
  {
    name: "Iceman",
    source: "Marvel Comics",
    media: "http://www.rtodd.net/images/comics-iceman.jpg",
    bio: "Iceman is a mutant born with superhuman abilities. He has the ability to manipulate ice and cold by freezing water vapor around him. This allows him to freeze objects, as well as turn his body into ice.",
    moreBio: "After being outed as gay by the time-displaced Jean Grey, the younger time-displaced Iceman confronts his older self, asking him why he has been presenting as straight for most of his adult life. The older Bobby breaks down and admits that he has known he was gay for a long time but forcibly repressed that part of himself, fearful of how others would react. He further acknowledges that he was scared to reveal his true self to the world due to already facing prejudice for being a mutant and not wanting to receive hatred for another part of himself.",
  },
  {
    name: "John Constantine",
    source: "DC Comics",
    media: "http://www.rtodd.net/images/comics-john-constantine.jpg",
    bio: "The titular Hellblazer, Constantine is a working class warlock, occult detective and con man stationed in London. He is known for his endless cynicism, deadpan snarking, ruthless cunning and constant chain smoking, but he's also a passionate humanitarian driven by a heartfelt desire to do some good in his life.",
    moreBio: "Although a compassionate humanist who struggles to overcome the influence of both Heaven and Hell over humanity, and despite his occasional forays into heroism, Constantine is a foul-mouthed, disillusioned, British cynic who pursues a life of sorcery and danger. His motivation has been attributed to an adrenaline addiction that only the strange and mysterious can sate. He also seems to be something of a &#34;Weirdness Magnet&#34;."
  },
  {
    name: "Kevin Keller",
    source: "Archie Comics",
    media: "http://www.rtodd.net/images/comics-kevin-keller.jpg",
    bio: "Kevin Keller is a fictional character in the Archie Comics universe. He premiered in Veronica #202, published in September 2010.  Created by writer/artist Dan Parent, Kevin is the first openly gay character in Archie Comics history.",
    moreBio: "Archie Comics co-CEO Jon Goldwater explained that including an openly gay character is a way to open up the world of Riverdale and de-stigmatize homosexuality. &#34;Archie's hometown of Riverdale has always been a safe world for everyone. It just makes sense to have an openly gay character in Archie comic books.&#34; Veronica writer Dan Parent concurred, saying &#34;It shows that Riverdale is in the 21st century.&#34;",
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 345,
    margin: "10px auto",
    backgroundColor: theme.palette.secondary.main,
  },
  gridItem: {
    display: "flex",
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.dark,
  },
  media: {
    height: 170,
  },
  name: {
    color: theme.palette.secondary.contrastText,
    fontWeight: 600,
  },
  bio: {
    color: theme.palette.primary.dark,
  },
  cardActions: {
    marginTop: "auto",
    minHeight: "10px",
    backgroundColor: theme.palette.quinary.main,
  },
}));

const MediaCardFunctional = props => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Grid container spacing={2}>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
          <Card className={classes.root} variant="outlined">
            <CardHeader className={classes.cardHeader}></CardHeader>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={ item.media }
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography className={classes.name} gutterBottom={true} variant="h5">
                  { item.name }
                </Typography>
                <Typography className={classes.bio} variant="body2">
                { item.bio }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}></CardActions>
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