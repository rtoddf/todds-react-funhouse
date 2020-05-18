import React from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../Common";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    link: {
        // display: "inline"
    }
}));

const Links = props => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <PageHeading title="Links" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac vehicula justo. Suspendisse blandit urna quam. Sed consequat a massa a semper. Morbi ultricies volutpat felis, ut iaculis nibh varius varius.</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link className={classes.link} href="https://material-ui.com/" target="_blank" rel="noreferrer">
                        Material-UI
                    </Link>
                    <Link className={classes.link} href="https://www.materialui.co/colors" target="_blank" rel="noreferrer">
                        Material-UI Colors
                    </Link>
                    <Link className={classes.link} href="https://material-ui.com/components/material-icons/" target="_blank" rel="noreferrer">
                        Material Icons
                    </Link>
                    <Link className={classes.link} href="https://material-ui.com/customization/default-theme/" target="_blank" rel="noreferrer">
                        Material-UI Default Theme
                    </Link>
                    <Link className={classes.link} href="http://reactcommunity.org/react-transition-group/transition" target="_blank" rel="noreferrer">
                        React Transition Group
                    </Link>

                    <Link className={classes.link} href="https://color.adobe.com/mythemes" target="_blank" rel="noreferrer">
                        Adobe Color - My Themes
                    </Link>

                    
                    <Link className={classes.link} href="https://gist.github.com/mannyblum/e60d4b4bf25bdd6b0bb47ce563431625" target="_blank" rel="noreferrer">
                        Sample Create Theme - Manny
                    </Link>
                    <Link className={classes.link} href="https://danilowoz.com/create-content-loader/" target="_blank" rel="noreferrer">
                        Create Content Loader - Manny
                    </Link>
                    <Link className={classes.link} href="https://scotch.io/tutorials/optionalchaining-in-javascript-2020-ecmascript-2020" target="_blank" rel="noreferrer">
                        optional?.chaining in JavaScript 2020 - Manny
                    </Link>
                    <Link className={classes.link} href="https://deprecate.mui-treasury.com/components/card" target="_blank" rel="noreferrer">
                        MUI Treasury
                    </Link>
                    <Link className={classes.link} href="https://codesandbox.io/s/01m058n220?file=/src/Component.js:691-825" target="_blank" rel="noreferrer">
                        Card Design Sandbox
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Links;