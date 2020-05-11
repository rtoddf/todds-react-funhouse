import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar, Button, Dialog, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";

import { quotes } from "../../../data";

const useStyles = makeStyles((theme) => ({
  paper: {
    ...theme.paper,
    padding: "20px 20px 5px",
    textAlign: "center"
  },
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
  },
  quote: {
    margin: "20px 0 10px",
    color: theme.palette.primary.main,
    fontStyle: "italic",
  }
}));

function SimpleDialog(props) {
  console.log("props: ", props)

  const classes = useStyles();
  const { onClose, selectedQuote, selectedAuthor, open } = props;

  const handleClose = () => {
    onClose(selectedQuote);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <List>
        {quotes.map((item, index) => (
          <ListItem button onClick={() => handleListItemClick(item)} key={index}>
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

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedQuote: PropTypes.string.isRequired,
// };

const SimpleDialogFunctional = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedQuote, setSelectedQuote] = React.useState("");
  const [selectedAuthor, setSelectedAuthor] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    console.log("value: ", value)
    setOpen(false);
    setSelectedQuote(value.quote);
    setSelectedAuthor(value.author);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} className={classes.gridItem}></Grid>
      <Grid item xs={12} md={4} className={classes.gridItem}>
        <Paper className={classes.paper}>
          <Button className={classes.button} variant="outlined" onClick={handleClickOpen}>
            Choose a Quote Author
          </Button>
          <br />
          <Typography className={classes.quote} variant="subtitle1">{selectedQuote}</Typography>
          <Typography className={classes.author} variant="subtitle1">{selectedAuthor}</Typography>
          <SimpleDialog selectedQuote={selectedQuote} open={open} onClose={handleClose} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} className={classes.gridItem}></Grid>
    </Grid>
  );
}

export default SimpleDialogFunctional;

