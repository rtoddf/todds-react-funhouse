import React from "react";
import { Container, Grid, List, Typography, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.primary.main
    },
    listItem: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    }
}));

const Sources = (props) => {
  // eslint-disable-next-line react/prop-types
  const { sources } = props;

  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  
  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  const sourcesItemsStructure = sources.map((item, i) => {
    return(
      <>
        <ListItem key={i} className={classes.listItem} button>
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
    <>
      <div className={classes.demo}>
        <List>
          {sourcesItemsStructure}
        </List>
      </div>
    </>
  )
}

export default Sources;