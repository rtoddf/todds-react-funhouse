import React from "react";
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, TextField } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
}));

const Detail = (props) => {
  const { title, liveStream } = props.item;
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
          classes=""
          title={ `Editing: ${title}` }
      />
      <CardContent>
      <TextField
          id={`outlined-helperText`}
          label="Title"
          value={title}
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
          id={`outlined-helperText`}
          label="Live Stream"
          value={liveStream}
          variant="outlined"
          className={classes.textfield}
        />
      </CardContent>
    </Card>
  )
}

Detail.propTypes = {
  item: PropTypes.object,
  title: PropTypes.string,
  liveStream: PropTypes.string,
};

export default Detail;