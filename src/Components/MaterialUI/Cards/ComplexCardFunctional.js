import React from "react";
import ComplexCard from "./ComplexCard";
import { Grid } from "@material-ui/core";
import { comics01 } from "../../../data/Comics";

const ComplexCardFunctional = props => {
<<<<<<< HEAD
  return (
    <Grid container spacing={2}>
      
      {comics01.map((item, index) => (
        <Grid item key={index} xs={12} md={3}>
          <ComplexCard item={item} index={index} />
=======
  const classes = useStyles();
  const { loading = false } = props;
  const [expanded, setExpanded] = React.useState(null);

  const handleExpandClick = (index) => {
    setExpanded(index);
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
                  [classes.expandOpen]: expanded === index,
                })}
                onClick={() => handleExpandClick(index)}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={classes.bio} variant="body2" component="p">
                  { item.moreBio }
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
>>>>>>> setting expand click for multiple cards
        </Grid>
      ))}
    </Grid>
  )
}

export default ComplexCardFunctional;