import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../Common";

import * as parkData from "./data/skateboard-parks.json";
// import "./css/leaflet.css";
import "./css/base.css";

const skater = new Icon({
    iconUrl: "/skateboarding.svg",
    iconSize: [25, 25]
})

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

const Simple01 = props => {
    const classes = useStyles();
    const [activePark, setActivePark] = useState(null);

    return (
        <Container className={classes.root}>
            <PageHeading title="Leaflet - Simple 01" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Map center={[45.4, -75.7]} zoom={12}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                    
                        {parkData.features.map(park => (
                            <Marker key={park.properties.PARK_ID} position={[
                                park.geometry.coordinates[1],
                                park.geometry.coordinates[0]
                              ]}
                              onClick={() => {
                                setActivePark(park);
                              }}
                              icon={skater}
                            />
                        ))}

                        {activePark && (
                            <Popup
                                position={[
                                    activePark.geometry.coordinates[1],
                                    activePark.geometry.coordinates[0]
                                ]}
                                onClose={() => {
                                    setActivePark(null);
                                }}
                                >
                                <div>
                                    <h2>{activePark.properties.NAME}</h2>
                                    <p>{activePark.properties.DESCRIPTIO}</p>
                                </div>
                            </Popup>
                        )}
                    </Map>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Simple01;