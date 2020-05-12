import React from "react";
import { Card, CardContent, CardMedia, IconButton, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    shadow: theme.shadows[5]
  },
  details: {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.primary.light,
  },
  content: {
    flex: "1 0 auto",
  },
  media: {
    width: 160,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const UIControlsCard = props => {
  const classes = useStyles();
  // const theme = useTheme();
  const { item } = props;

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h6">
            { item.title }
          </Typography>
          <Typography className={classes.artist} variant="subtitle2">
            { item.artist }
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            <SkipPreviousIcon />
            {/* {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon />
            {/* {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.media}
        image={ item.media }
        title={ item.title }
      />
    </Card>
  )
}

export default UIControlsCard;