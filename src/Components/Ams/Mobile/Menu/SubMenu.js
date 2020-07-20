/* eslint-disable react/jsx-key */
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, TextField, Typography } from "@material-ui/core";
import TypesSources from '../Common/TypesSources';
import AddNew from "../Common/AddNew";

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      width: "100%",
      margin: "10px auto",
      shadow: theme.shadows[5]
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  accordianItem: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
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
  alignSelf: {
      alignSelf: "center"
  },
  pOverride: {
     marginBottom: 0, 
  },
  icons: {
    color: theme.palette.primary.contrastText,
  }
}));

const SubMenu = (props) => {
    // eslint-disable-next-line react/prop-types
    const { subMenu } = props
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const subMenuItems = subMenu.map((item, i) => {
        return(
            <Accordion className={classes.accordianItem} key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                <AccordionSummary
                    className={classes.summary}
                    expandIcon={<ExpandMoreIcon className={classes.icons} />}
                    id={`panel${i}bh-header`}
                >
                    <IconButton aria-label="delete">
                        <DeleteIcon className={classes.icons} />
                    </IconButton>
                    <Typography className={classes.heading}>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <Container className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    id={`outlined-helperText-${i}`}
                                    label="Menu Title"
                                    defaultValue={item.title}
                                    variant="outlined"
                                    className={classes.textfield}
                                />
                            </Grid>
                            <Grid item xs={12} md={9} className={classes.alignSelf}>
                                <Typography className={classes.pOverride}><strong>Content Type: </strong>{item.contentType}</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TypesSources type="type" />
                            </Grid>

                            <Grid item xs={12} md={9} className={classes.alignSelf}>
                                <Typography className={classes.pOverride}><strong>Content Source: </strong>{item.contentSource}</Typography>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TypesSources type="source" />
                            </Grid>
                        </Grid>
                    </Container>
                </AccordionDetails>
            </Accordion>
        );
    });

    return (
        <>
            <Typography className={classes.heading}>Submenu Items</Typography>
            { subMenuItems }
            <AddNew type="menu" />
        </>
    )
}

export default SubMenu;