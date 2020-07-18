/* eslint-disable react/jsx-key */
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from "@material-ui/core";

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MenuItemSecondary from './MenuItemSecondary';

import { makeStyles } from '@material-ui/core/styles';
import { mobileMenu } from "../data/AMS";

const useStyles = makeStyles((theme) => ({
  // gridItem: {
  //     display: "flex",
  // },
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    alignSelf: 'flex-end',
  },
  summary: {
    alignItems: 'center',
  },
  details: {
    padding: 0,
  },
  textfield: {
    width: '100%',
  },
}));

const Menu = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordianItems = mobileMenu.map((item, i) => {
    return(
      <Accordion key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          id={`panel${i}bh-header`}
        >
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <Typography className={classes.heading}>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Container className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  id={`outlined-helperText-${i}`}
                  label="Menu item text"
                  defaultValue={item.title}
                  variant="outlined"
                  className={classes.textfield}
                />
                <MenuItemSecondary secondaryMenuItems={item.secondaryMenuItems} />
              </Grid>
            </Grid>
          </Container>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
            <Typography>Mobile Menu</Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.gridItem}>
          {accordianItems}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Menu;