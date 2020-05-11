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
  }
}));

const ComplexCardFunctional = props => {
  const classes = useStyles();
  const { loading = false } = props;
  const [expanded, setExpanded] = React.useState(null);
  // const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (index) => {
    // switch(index){
    //   case 0: 
    //     return setExpanded([true, false, false, false])
    //   case 1: 
    //     return setExpanded([false, true, false, false])
    //   case 2: 
    //     return setExpanded([false, false, true, false])
    //   case 3: 
    //     return setExpanded([false, false, false, true])
    //   default:
    //     setExpanded(index);
    // }

    setExpanded(index);
  };

  // const handleExpandClick = (e) => {
  //   console.log("e: ", e.target)
  //   setExpanded(!expanded);
  // }

  return (
    <Grid container spacing={2}>
      {(loading ? Array.from(new Array(3)) : comics).map((item, index) => (
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
            <CardContent className={classes.cardContent}>
              <Typography className={classes.bio} variant="body2" component="p">
                <span dangerouslySetInnerHTML={{__html: item.bio}} />
                {/* { item.bio } */}
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
                  [classes.expandOpen]: expanded === index,
                  // [classes.expandOpen]: expanded,
                })}
                onClick={() => handleExpandClick(index)}
                // onClick={() => setExpanded(!expanded)}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
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