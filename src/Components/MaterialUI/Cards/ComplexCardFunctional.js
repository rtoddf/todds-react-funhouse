import React from "react";
import clsx from 'clsx';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Typography } from "@material-ui/core";

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { red } from '@material-ui/core/colors';
import { makeStyles } from "@material-ui/core/styles";

const data = [
  {
    name: "Deadpool",
    source: "Marvel Comics",
    media: "http://www.rtodd.net/images/comics-deadpool01.jpg",
    bio: "Deadpool, whose real name is Wade Wilson, is a disfigured mercenary with the superhuman ability of an accelerated healing factor and physical prowess. The character is known as the /'Merc with a Mouth/' because of his tendency to talk and joke constantly, including breaking the fourth wall for humorous effect and running gags.",
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
    moreBio: "Although a compassionate humanist who struggles to overcome the influence of both Heaven and Hell over humanity, and despite his occasional forays into heroism, Constantine is a foul-mouthed, disillusioned, British cynic who pursues a life of sorcery and danger. His motivation has been attributed to an adrenaline addiction that only the strange and mysterious can sate. He also seems to be something of a \'Weirdness Magnet\'."
  },
  {
    name: "Kevin Keller",
    source: "Archie Comics",
    media: "http://www.rtodd.net/images/comics-kevin-keller.jpg",
    bio: "Kevin Keller is a fictional character in the Archie Comics universe. He premiered in Veronica #202, published in September 2010.  Created by writer/artist Dan Parent, Kevin is the first openly gay character in Archie Comics history.",
    moreBio: "Archie Comics co-CEO Jon Goldwater explained that including an openly gay character is a way to open up the world of Riverdale and de-stigmatize homosexuality. \'Archie's hometown of Riverdale has always been a safe world for everyone. It just makes sense to have an openly gay character in Archie comic books.\' Veronica writer Dan Parent concurred, saying \'It shows that Riverdale is in the 21st century.\'",
  }
]

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
  },
  root: {
    // maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    marginTop: "auto",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  // https://material-ui.com/customization/components/#overriding-styles-with-classes
  boob: {
    color: "white",
  },
  titleBoob: {
    fontSize: "18px"
  }
}));

const ComplexCardFunctional = props => {
  const classes = useStyles();
  const { loading = false } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    console.log("e: ", e.currentTarget.parentNode.getAttribute("key"))
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={2}>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
          <Card className={classes.root}>
            <CardHeader
              // className={classes.cardHeader}
              classes={{ root: classes.cardHeader, subheader: classes.boob, title: classes.titleBoob }}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  M
                </Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title={ item.name }
              subheader={ item.source }
            />
            <CardMedia
              className={classes.media}
              image={ item.media }
              title={ item.name }
            />
            <CardContent>
              <Typography className={classes.bio} variant="body2" component="p">
                { item.bio }
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
              {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={classes.bio} variant="body2" component="p">
                  { item.moreBio }
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ComplexCardFunctional;