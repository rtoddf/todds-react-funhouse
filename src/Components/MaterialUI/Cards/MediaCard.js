import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
        margin: "10px auto",
        backgroundColor: theme.palette.secondary.main,
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
  

const MediaCard = props => {
    const classes = useStyles();
    const {item} = props;

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader className={classes.cardHeader}></CardHeader>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={ item.media }
                title={ item.name }
            />
            <CardContent>
                <Typography className={classes.name} gutterBottom={true} variant="h5">
                { item.name }
                </Typography>
                <Typography className={classes.bio} variant="body2">
                <span dangerouslySetInnerHTML={{__html: item.bio}} />
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}></CardActions>
        </Card>
    )
}

export default MediaCard;

  // const [state, setState] = React.useState({
  //   subscribe: false
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  // const { subscribe } = state;

  /* <CardActions>
    <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={subscribe} onChange={handleChange} name="subscribe" />}
          label="Sign Up"
        />
      </FormGroup>
    </FormControl>
  </CardActions> */