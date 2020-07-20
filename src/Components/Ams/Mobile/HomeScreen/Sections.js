import React from "react";
import TypesSources from '../Common/TypesSources';
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DragHandleIcon from '@material-ui/icons/DragHandle';

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

const Sections = (props) => {
    const { sections } = props;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    const sectionItemsStructure = sections.map((item, i) => {
      return(
        <Accordion key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
          <AccordionSummary
            className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            id={`panel${i}bh-header`}
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
                    label="Section Header Name"
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
                <Grid item xs={12} md={3}>
                  <TextField
                    id={`outlined-helperText-${i}`}
                    label="Story Count"
                    defaultValue={item.storyCount}
                    variant="outlined"
                    className={classes.textfield}
                  />
                </Grid>
              </Grid>
            </Container>
          </AccordionDetails>
        </Accordion>
      );
    });
  
    return (
        <>
            {sectionItemsStructure}
        </>
    )
  }
  
  export default Sections;