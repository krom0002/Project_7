import React from 'react';

const MapTest = (props) => {


    var initMap = (props) => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 29.498078099999997, lng: -81.242845},
            zoom: 10.5
        });

        this.props.stations.map(station => {

            var marker = new window.google.maps.Marker({
                position: {lat: parseFloat(station.lat), lng: parseFloat(station.lng)},
                map: map,
                title: station.station
            });

            var infowindow = new window.google.maps.InfoWindow({
                content: `name: ${station.station}, 
                address: ${station.address},
                miles: ${station.distance}`
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        })
    }

    return (
        <div tabIndex="4" role="application" id="map">{initMap}</div>

    )

}

export default MapTest;