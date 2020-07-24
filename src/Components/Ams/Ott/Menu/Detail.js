import React from "react";
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, InputLabel, Input, FormControl, Select, TextField } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import { contentTypes, contentSources } from "../../data/OttMenu";

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

  const [contentTypeChoice, setContentTypeChoice] = React.useState('');
  const [contentSourceChoice, setContentSourceChoice] = React.useState('');

  const handleContentTypeChange = (event) => {
    setContentTypeChoice(event.target.value || '');
  };

  const handleContentSourceChange = (event) => {
      setContentSourceChoice(event.target.value || '');
  };

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
        <FormControl classes={classes.formControl}>
          <InputLabel htmlFor="demo-dialog-native">Content Type</InputLabel>
          <Select
              native
              value={contentTypeChoice}
              onChange={handleContentTypeChange}
              input={<Input />}
              className={classes.textfield}
          >
              <option aria-label="None" value="" />
              {contentTypes.map((type, i) => (
                  <option key={i} value={type}>{type}</option>
              ))}
          </Select>
        </FormControl>
        <FormControl classes={classes.formControl}>
            <InputLabel htmlFor="dialog-content-source">Content Source</InputLabel>
            <Select
                native
                value={contentSourceChoice}
                onChange={handleContentSourceChange}
                input={<Input />}
                className={classes.textfield}
            >
                <option aria-label="None" value="" />
                {contentSources.map((type, i) => (
                    <option key={i} value={type}>{type}</option>
                ))}
            </Select>
        </FormControl>
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