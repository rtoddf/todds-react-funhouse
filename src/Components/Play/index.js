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

const Play = props => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <PageHeading title="Play" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac vehicula justo. Suspendisse blandit urna quam. Sed consequat a massa a semper. Morbi ultricies volutpat felis, ut iaculis nibh varius varius. Vestibulum aliquet accumsan semper. In dapibus a risus elementum molestie. Suspendisse pulvinar euismod cursus. Pellentesque pretium, sem eget imperdiet faucibus, lorem diam commodo massa, ac viverra ante quam in metus. Nulla facilisi. Nullam in nibh vel lectus vehicula tristique. Aliquam nec nulla vestibulum, varius nunc eget, pellentesque quam. Suspendisse varius et ante eu ultrices. Donec dictum aliquam turpis vel euismod. Nulla accumsan, erat ut vulputate aliquet, mi felis euismod velit, vitae laoreet mi sem id magna.</Typography>
                    <List component="nav" className={classes.list}>
                        <ListItem button component="a" href="/play/overrides" className={classes.listItem}>
                            <ListItemText primary="Overrides" className={classes.listItemtext} />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Play;