/* eslint-disable react/jsx-key */
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DragHandleIcon from '@material-ui/icons/DragHandle';

import SubMenu from './SubMenu';
import AddNew from "../../Common/AddNew";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
  accordianItem: {
    backgroundColor: theme.palette.common.white,
    shadow: theme.shadows[5],
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
  trashIcon: {
    marginLeft: "auto"
  }
}));

const MainMenu = (props) => {
    const { mobileMenu } = props;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    const menuItemsStructure = mobileMenu.map((item, i) => {
      return(
        <Accordion className={classes.accordianItem} key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
          <AccordionSummary
            className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            id={`panel${i}bh-header`}
            justify="space-between"
          >
            <IconButton aria-label="drag">
              <DragHandleIcon />
            </IconButton>
            <Typography className={classes.heading}>{item.title}</Typography>
            <IconButton className={classes.trashIcon} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Container className={classes.root}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    id={`outlined-helperText-${i}`}
                    label="Menu title"
                    defaultValue={item.title}
                    variant="outlined"
                    className={classes.textfield}
                  />
                  <SubMenu subMenu={item.subMenu} />
                </Grid>
              </Grid>
            </Container>
          </AccordionDetails>
        </Accordion>
      );
    });
  
    return (
        <>
          <AddNew type="menu" />
          {menuItemsStructure}
        </>
    )
  }
  
  export default MainMenu;