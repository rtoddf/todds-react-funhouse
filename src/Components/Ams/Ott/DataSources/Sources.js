import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.primary.main
    }
}));

const Sources = (props) => {
  const { sources } = props;
  const classes = useStyles();

  const sourcesItemsStructure = sources.map((item, i) => {
    return(
      <>
        <ListItem key={i} className={classes.listItem} button onClick={() => props.setSelected(item)}>
          <ListItemText primary={item.title} />
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <ArrowForwardIosIcon />
        </ListItem>
      </>
    );
  });

  return (
    <div className={classes.demo}>
      <List>
        {sourcesItemsStructure}
      </List>
    </div>
  );
}

export default Sources;