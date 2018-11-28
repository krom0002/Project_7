import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import MapMarker from "./MapMarker";

const NewMap = withScriptjs(withGoogleMap((props) => {

    const marker = props.stations.map(station => <MapMarker
        key={station.id}
        station={station}
        location={{lat: parseFloat(station.lat), lng: parseFloat(station.lng)}}
    />);

    return (
        <GoogleMap
            defaultZoom={10.5}
            center={{lat: 29.498078099999997, lng: -81.242845}}
        >
            {marker}
        </GoogleMap>
    );
}
))

export default NewMap;
