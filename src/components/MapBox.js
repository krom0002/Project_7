import React from 'react';

class MapBox extends React.Component {

    componentWillReceiveProps(props) {
        this.renderMap(props)
    }

    // sourcing from "https://www.youtube.com/watch?v=W5LhLZqj76s"
    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBZLo0MDqJFrhRfDloS2MZtF2lADZEQWkk&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
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


    render() {
        console.log("map props");
        console.log(this.props.stations);

        return (
            <div className='map_box'>

                <div tabIndex="4" role="application" id="map"></div>

            </div>
        );
    }
}


// sourcing from "https://www.youtube.com/watch?v=W5LhLZqj76s"
function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default MapBox;






