import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Tabs, Tab, Toolbar, Typography, useScrollTrigger } from '@material-ui/core/';
import { Link } from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolBarMargin: {
        // spread operator
        ...theme.mixins.toolbar
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        backgroundColor: theme.palette.tertiary.main,
        // color: theme.palette.common.white
    }
}));

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Tabs className={classes.tabContainer}>
                            <Tab className={classes.tab} label="Home" component={Link} to="/" />
                            <Tab className={classes.tab} label="Trials" component={Link} to="/trials" />
                            <Tab className={classes.tab} label="Play" component={Link} to="/play" />
                            <Tab className={classes.tab} label="Contact" component={Link} to="/contact" />
                        </Tabs>
                        <Button variant="contained" className={classes.button}>
                            News
                        </Button>
                        {/* <Typography variant="h6" className={classes.title}>
                            News
                        </Typography> */}
                        {/* <Button>Login</Button> */}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <>
                <div className={ classes.toolBarMargin } />
            </>
        </div>
      );
}

export default Header;