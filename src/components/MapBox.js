import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"



const MyMapComponent = withScriptjs(withGoogleMap((props) =>


    <GoogleMap

        defaultZoom={10.5}
        center={{lat: 29.498078099999997, lng: -81.242845}}>

        {props.isMarkerShown && <Marker position={{lat: 29.498078099999997, lng: -81.242845}} />}

    </GoogleMap>

))


class MapBox extends React.Component {

    render() {
        // console.log(this.props.user_latitude);
        // console.log(this.props);

        return (
            <div className='map_box'>
                <MyMapComponent
                    isMarkerShown
                    role="application"
                    aria-label="map"
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBZLo0MDqJFrhRfDloS2MZtF2lADZEQWkk"
                    loadingElement={<div style={{height: `100%`}} />}
                    containerElement={<div style={{height: `500px`}} />}
                    mapElement={<div style={{height: `100%`}} />}
                />
            </div>
        )
    }
}

export default MapBox;






