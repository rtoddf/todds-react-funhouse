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
    name: "John Constantine",
    source: "DC Comics",
    media: "http://www.rtodd.net/images/comics-john-constantine.jpg",
    bio: "The titular Hellblazer, Constantine is a working class warlock, occult detective and con man stationed in London. He is known for his endless cynicism, deadpan snarking, ruthless cunning and constant chain smoking, but he's also a passionate humanitarian driven by a heartfelt desire to do some good in his life.",
    moreBio: "Although a compassionate humanist who struggles to overcome the influence of both Heaven and Hell over humanity, and despite his occasional forays into heroism, Constantine is a foul-mouthed, disillusioned, British cynic who pursues a life of sorcery and danger. His motivation has been attributed to an adrenaline addiction that only the strange and mysterious can sate. He also seems to be something of a \'Weirdness Magnet\'."
  }
]

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
  },
  root: {
    // maxWidth: 345,
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
    color: "white"
  },
  titleBoob: {
    color: "red"
  }
}));

const ComplexCardFunctional = props => {
  const classes = useStyles();
  const { loading = false } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
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
            <CardActions disableSpacing>
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