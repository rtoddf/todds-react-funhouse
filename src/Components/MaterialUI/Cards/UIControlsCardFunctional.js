import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import image from "../../../static/images/cards/500x500bb.jpg";
import { music01 } from "../../../data/Music";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
  },
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
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
  
const UIControlsCardFunctional = props => {
    const classes = useStyles();
    const theme = useTheme();

    return (
      <Grid container spacing={2}>
        {music01.map((item, index) => (
          <Grid key={index} item xs={12} md={4} className={classes.gridItem}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Bang! (2020)
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    AJR
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="previous">
                    {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
                  </IconButton>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon className={classes.playIcon} />
                  </IconButton>
                  <IconButton aria-label="next">
                    {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
                  </IconButton>
                </div>
              </div>
              <CardMedia
                className={classes.cover}
                image={image}
                title="Live from space album cover"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    )
}

export default UIControlsCardFunctional;