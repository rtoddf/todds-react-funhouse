import React from "react";
import { Container, Grid, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../Common";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "50px",
        paddingBottom: "50px",
        borderBottom: "1px solid #999",
    },
    list: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    listItem: {
        paddingTop: 0,
        paddingBottom: 0,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main
        }
    },
    listItemtext: {
        marginTop: "15px",
        marginBottom: 0
    }
}));

const Components = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <Grid container spacing={2}>
                    <PageHeading title="Material-UI Components" />
                    <Grid item xs={12} md={6}>
                        <Typography>Data Display</Typography>
                        <List component="nav" className={classes.list}>
                            <ListItem button component="a" href="/components/avatar" className={classes.listItem}>
                                <ListItemText primary="Avatar" className={classes.listItemtext} />
                            </ListItem>

                            <ListItem button component="a" href="/components/badges" className={classes.listItem}>
                                <ListItemText primary="Badges" className={classes.listItemtext} />
                            </ListItem>
                            <ListItem button component="a" href="/components/chip" className={classes.listItem}>
                                <ListItemText primary="Chip" className={classes.listItemtext} />
                            </ListItem>
                            <ListItem button component="a" href="/components/table" className={classes.listItem}>
                                <ListItemText primary="Table" className={classes.listItemtext} />
                            </ListItem>
                        </List>

                        <Typography>Inputs</Typography>
                        <List component="nav" className={classes.list}>
                            <ListItem button component="a" href="/components/buttons" className={classes.listItem}>
                                <ListItemText primary="Buttons" className={classes.listItemtext} />
                            </ListItem>

                            <ListItem button component="a" href="/components/date-time" className={classes.listItem}>
                                <ListItemText primary="Date/Time" className={classes.listItemtext} />
                            </ListItem>
                            <ListItem button component="a" href="/components/select" className={classes.listItem}>
                                <ListItemText primary="Select" className={classes.listItemtext} />
                            </ListItem>
                            <ListItem button component="a" href="/components/textfield" className={classes.listItem}>
                                <ListItemText primary="Text Field" className={classes.listItemtext} />
                            </ListItem>
                            <ListItem button component="a" href="/components/transfer-list" className={classes.listItem}>
                                <ListItemText primary="Transfer List" className={classes.listItemtext} />
                            </ListItem>
                        </List>

                        <Typography>Utils</Typography>
                        <List component="nav" className={classes.list}>
                            <ListItem button component="a" href="/components/transitions" className={classes.listItem}>
                                <ListItemText primary="Transitions" className={classes.listItemtext} />
                            </ListItem>
                            <ListItem button component="a" href="/components/media-query" className={classes.listItem}>
                                <ListItemText primary="Media Query" className={classes.listItemtext} />
                            </ListItem>
                        </List>
                        
                        <Typography>Surfaces</Typography>
                        <List component="nav" className={classes.list}>
                            <ListItem button component="a" href="/components/cards" className={classes.listItem}>
                                <ListItemText primary="Cards" className={classes.listItemtext} />
                            </ListItem>
                            
                        </List>

                        <Typography>Feedback</Typography>
                        <List component="nav" className={classes.list}>
                            <ListItem button component="a" href="/components/dialog" className={classes.listItem}>
                                <ListItemText primary="Dialog" className={classes.listItemtext} />
                            </ListItem>

                            <ListItem button component="a" href="/components/progress" className={classes.listItem}>
                                <ListItemText primary="Progress" className={classes.listItemtext} />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac vehicula justo. Suspendisse blandit urna quam. Sed consequat a massa a semper. Morbi ultricies volutpat felis, ut iaculis nibh varius varius. Vestibulum aliquet accumsan semper. In dapibus a risus elementum molestie. Suspendisse pulvinar euismod cursus. Pellentesque pretium, sem eget imperdiet faucibus, lorem diam commodo massa, ac viverra ante quam in metus. Nulla facilisi. Nullam in nibh vel lectus vehicula tristique. Aliquam nec nulla vestibulum, varius nunc eget, pellentesque quam. Suspendisse varius et ante eu ultrices. Donec dictum aliquam turpis vel euismod. Nulla accumsan, erat ut vulputate aliquet, mi felis euismod velit, vitae laoreet mi sem id magna.</Typography>
                    </Grid>
                </Grid>
            </Container>
            {/* <Container className={classes.root}>
                <Grid container spacing={2}>
                    <PageHeading title="Material-UI Components" />
                    <Grid item xs={12} md={6}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac vehicula justo. Suspendisse blandit urna quam. Sed consequat a massa a semper. Morbi ultricies volutpat felis, ut iaculis nibh varius varius. Vestibulum aliquet accumsan semper. In dapibus a risus elementum molestie. Suspendisse pulvinar euismod cursus. Pellentesque pretium, sem eget imperdiet faucibus, lorem diam commodo massa, ac viverra ante quam in metus. Nulla facilisi. Nullam in nibh vel lectus vehicula tristique. Aliquam nec nulla vestibulum, varius nunc eget, pellentesque quam. Suspendisse varius et ante eu ultrices. Donec dictum aliquam turpis vel euismod. Nulla accumsan, erat ut vulputate aliquet, mi felis euismod velit, vitae laoreet mi sem id magna.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac vehicula justo. Suspendisse blandit urna quam. Sed consequat a massa a semper. Morbi ultricies volutpat felis, ut iaculis nibh varius varius. Vestibulum aliquet accumsan semper. In dapibus a risus elementum molestie. Suspendisse pulvinar euismod cursus. Pellentesque pretium, sem eget imperdiet faucibus, lorem diam commodo massa, ac viverra ante quam in metus. Nulla facilisi. Nullam in nibh vel lectus vehicula tristique. Aliquam nec nulla vestibulum, varius nunc eget, pellentesque quam. Suspendisse varius et ante eu ultrices. Donec dictum aliquam turpis vel euismod. Nulla accumsan, erat ut vulputate aliquet, mi felis euismod velit, vitae laoreet mi sem id magna.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Link href="/cards">Link</Link>
                        
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Link href="/buttons">Buttons</Link>
                    </Grid>
                </Grid>

            </Container> */}
        </>
    )
}

export default Components;