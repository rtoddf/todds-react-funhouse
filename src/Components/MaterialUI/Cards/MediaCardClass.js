import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { comics } from "../../../data";

const styles = theme => ({
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
});


class MediaCardClass extends React.Component {
  state = {
    subscribe: false
  }

  handleChange = (event) => {
    this.setState({subscribe: event.target.checked})
  };

  render() {
    const { classes } = this.props;
    const { loading = false } = this.props;

    return (
      <Grid container spacing={2}>
        {(loading ? Array.from(new Array(3)) : comics).map((item, index) => (
          <Grid item key={index} xs={12} md={3} className={classes.gridItem}>
            <Card className={classes.root}>
              <CardHeader className={classes.cardHeader}></CardHeader>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={ item.media }
                  title={ item.name }
                />
                <CardContent>
                  <Typography className={classes.name} gutterBottom={true} variant="h5">
                    {item.name}
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    <span dangerouslySetInnerHTML={{__html: item.bio}} />
                    {/* <span dangerouslySetInnerHTML={{__html: item.moreBio}} /> */}
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
}

export default withStyles(styles)(MediaCardClass);