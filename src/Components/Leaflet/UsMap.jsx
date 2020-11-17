import React from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const UsMap = ({states}) => {
    const mapStyles = {
        fillColor: 'white',
        weight: 1,
        color: 'black',
        fillOpacity: 1
    }
    
    return (
        <Map style={{height: '70vh'}} zoom={4} center={[40, -100]}>
            <GeoJSON style={mapStyles} data={states} />
        </Map>
    );
}

export default UsMap;