import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';
import { mobileMenu } from "../data/AMS";

const useStyles = makeStyles((theme) => ({
  gridItem: {
      display: "flex",
  },
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Menu = (props) => {
  const classes = useStyles();

  const menuItems = mobileMenu.map((item, i) => {
    return(
      // eslint-disable-next-line react/jsx-key
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <Container className={classes.root}>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography>Mobile Menu</Typography>
            <Typography>Avatar with text and icon</Typography>
            
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridItem}>
          <div className={classes.demo}>
            <List>
              {menuItems}
            </List>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Menu;