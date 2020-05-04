import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Tabs, Tab, Toolbar, Typography, useScrollTrigger } from '@material-ui/core/';
import { Link } from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';

import logo from "../../static/images/logo.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolBarMargin: {
        // spread operator
        ...theme.mixins.toolbar
    },
    logo: {
        height: "4em"
    },
    logoContainter: {
        padding: 0
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
        ...theme.button,
        marginRight: "25px",
        marginLeft: "50px",
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
    const [value, setValue] = useState(0);

    const handleNavChange = (e, value) => {
        setValue(value)
    }

    // useEffect is like componentDidMount
    // look up what is [value] - exrecise #27
    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0){
            setValue(0)
        } else if (window.location.pathname === "/trials" && value !== 1){
            setValue(1)
        } else if (window.location.pathname === "/play" && value !== 2){
            setValue(2)
        } else if (window.location.pathname === "/contact" && value !== 3){
            setValue(3)
        }
    }, [value]);

    return (
        <div className={classes.root}>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Button className={classes.logoContainter} component={Link} to="/">
                            <img src={logo} className={classes.logo} />
                        </Button>
                        <Tabs className={classes.tabContainer} value={value} onChange={handleNavChange} indicatorColor="primary">
                            <Tab className={classes.tab} label="Home" component={Link} to="/" />
                            <Tab className={classes.tab} label="Trials" component={Link} to="/trials" />
                            <Tab className={classes.tab} label="Play" component={Link} to="/play" />
                            <Tab className={classes.tab} label="Contact" component={Link} to="/contact" />
                        </Tabs>
                        <Button variant="contained" className={classes.button}>
                            News
                        </Button>
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