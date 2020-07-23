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
  const { title, source, type, path, baseUrl } = props.item;
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
          classes=""
          title={ `Editing ${title}` }
      />
      <CardContent>
        <TextField
          id={`outlined-helperText`}
          label="Name"
          value={title}
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
          id={`outlined-helperText`}
          label="Source"
          value={source}
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
          id={`outlined-helperText`}
          label="Type"
          value={type}
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
          id={`outlined-helperText`}
          label="Path"
          value={path}
          variant="outlined"
          className={classes.textfield}
        />
        <TextField
          id={`outlined-helperText`}
          label="Base URL"
          value={baseUrl}
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
  source: PropTypes.string,
  type: PropTypes.string,
  path: PropTypes.string,
  baseUrl: PropTypes.string,
};

export default Detail;