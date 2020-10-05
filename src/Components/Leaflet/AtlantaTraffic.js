import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { PageHeading } from "../Common";

import * as trafficData from "./data/get_list_by_status.json";
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

const AtlantaTraffic = () => {
    const classes = useStyles();
    const [activeIncident, setActiveIncident] = useState(null);

    const incidents = trafficData.incidents;
    console.log('incidents: ', incidents)

    return (
        <Container className={classes.root}>
            <PageHeading title="Leaflet - Atlanta Traffic" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Map center={[33.748188,-84.390865]} zoom={11}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                    
                        {incidents.map(incident => (
                            <Marker key={incident.id} position={[
                                incident.incident_location.lat,incident.incident_location.lng
                              ]}
                              onClick={() => {
                                setActiveIncident(incident);
                              }}
                            //   icon={skater}
                            />
                        ))}

                        {activeIncident && (
                            <Popup
                                position={ [activeIncident.incident_location.lat, activeIncident.incident_location.lng] }
                                onClose={() => { setActiveIncident(null); }}
                                >
                                <div>
                                    <h2>{activeIncident.street_name}</h2>
                                    <p>{activeIncident.text_message}</p>
                                </div>
                            </Popup>
                        )}
                    </Map>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AtlantaTraffic;