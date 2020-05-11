import React from "react";
import clsx from 'clsx';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import { comics } from "../../../data";

const useStyles = makeStyles((theme) => ({
  root: {
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
  cardContent: {
    paddingBottom: 0,
  },
  cardActions: {
    marginTop: "auto",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    padding: "0 12px",
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
  cardHeaderSubheader: {
    color: "white",
  },
  cardHeaderTitle: {
    fontSize: "18px"
  },
  bio: {
    color: theme.palette.primary.dark,
  },
}));

const ComplexCardFunctional = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(null);

  const handleExpandClick = (index) => {
    console.log("index: ", index)
    // that card is open and we want to close it
    expanded === index ? setExpanded(null) : setExpanded(index);
  };

  return (
    <Grid container spacing={2}>
      {comics.map((item, index) => (
        <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
          <Card className={classes.root}>
            <CardHeader
              // className={classes.cardHeader}
              classes={{ root: classes.cardHeader, title: classes.cardHeaderTitle, subheader: classes.cardHeaderSubheader }}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  M
                </Avatar>
              }
              title={ item.name }
              subheader={ item.source }
            />
            <CardMedia
              className={classes.media}
              image={ item.media }
              title={ item.name }
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.bio} variant="body2">
                <span dangerouslySetInnerHTML={{__html: item.bio}} />
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded === index,
                })}
                // it knows the index because of the card this is in
                onClick={() => handleExpandClick(index)}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            {/* // expanded === index is true or false */}
            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={classes.bio} variant="body2" component="p">
                  <span dangerouslySetInnerHTML={{__html: item.moreBio}} />
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