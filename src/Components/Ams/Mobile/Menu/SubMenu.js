/* eslint-disable react/jsx-key */
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, TextField, Typography } from "@material-ui/core";
import TypesSources from './TypesSources';

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
  }
}));

const SubMenu = (props) => {
    const { subMenu } = props
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const subMenuItems = subMenu.map((item, i) => {
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
                                <Typography className={classes.heading}>Title</Typography>
                                <TextField
                                    id={`outlined-helperText-${i}`}
                                    label="Menu Title"
                                    defaultValue={item.title}
                                    variant="outlined"
                                    className={classes.textfield}
                                />

                                <Container className={classes.root}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={9} className={classes.alignSelf}>
                                            <Typography className={classes.pOverride}><strong>Content Type: </strong>{item.contentType}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TypesSources type="type" />
                                        </Grid>
                                    </Grid>
                                </Container>
                                <Container className={classes.root}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={9} className={classes.alignSelf}>
                                            <Typography className={classes.pOverride}><strong>Content Source: </strong>{item.contentSource}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TypesSources type="source" />
                                        </Grid>
                                    </Grid>
                                </Container>                                
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
        </>
    )
}

export default SubMenu;