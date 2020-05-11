import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar, Button, Dialog, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";

import { quotesy } from "../../../data";

console.log("quotesy: ", quotesy)

const quotes = ["Abraham Lincoln", "Nelson Mandela", "Walt Disney", "Steve Jobs", "Oprah Winfrey", "John Lennon"];
const useStyles = makeStyles((theme) => ({
  // gridItem: {
  //   display: "flex",
  // },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  button: {
    ...theme.Button,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.secondary.dark,
    "&:hover": {
      backgroundColor: theme.palette.quinary.main,
      borderColor: theme.palette.quinary.dark,
    }
  }
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <List>
        {quotesy.map((item, index) => (
          <ListItem button onClick={() => handleListItemClick(item.author)} key={index}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.author} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const SimpleDialogFunctional = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(quotes[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} className={classes.gridItem}>
        <Button className={classes.button} variant="outlined" onClick={handleClickOpen}>
          Choose a Quote Author
        </Button>
        <br />
        <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </Grid>
      
    </Grid>
  );
}

export default SimpleDialogFunctional;

