import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../Common";
import LoadStatesTask from './tasks/LoadStatesTask';
import UsMap from './UsMap';

import * as incidentsData from "./data/incidents.json";
import "./css/base.css";

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

const UsChoropleth01 = () => {
    const classes = useStyles();

    const [states, setStates] = useState([]);
    const load = () => {
        const loadStatesTask = new LoadStatesTask();
        loadStatesTask.load(setStates);
    }

    useEffect(load, []);

    console.log('states: ', states)
    console.log('states.length: ', states.length)

    return (
        <Container className={classes.root}>
            <PageHeading title="Leaflet - US Choropleth One" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>

                    {states.length === 0 ? <h1>Loading</h1> : <UsMap states={states} />}

                    {/* <Map center={[37.8, -96]} zoom={4} scrollWheelZoom={false}>
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                            id='mapbox/light-v9'
                        />
                    </Map> */}

                </Grid>
            </Grid>
        </Container>
    )
}

export default UsChoropleth01;