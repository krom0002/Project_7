import React from 'react';

//COMPONENTS
import ListBox from './ListBox';
import MapBox from './MapBox';

class MainBox extends React.Component {

    constructor() {
        super()
        this.state = {
            "stations": [],
            "mile": 0
        };
    }

    componentDidMount() {

        let url = new URL(`http://api.mygasfeed.com/stations/radius/29.4980868/-81.24282319999999/10/reg/distance/qye48e5m6h.json?`)

        fetch(url)
            .then((res) => res.json())
            .then(res => this.setState({"stations": res.stations}))
            .catch(error => {console.log("something went wrong: " + error)})
            .catch(error => window.alert("something went wrong: " + error));

    }

    selectAnswer() {

        let mile = this.refs.mileSelect.value;

        let newStations = this.state.stations.filter(function (station) {

            if (station.distance < mile) {
                return station;
            }
            // mile = 0;
        });
        console.log("mile");
        console.log(this.refs.mileSelect.value);

        this.setState({"stations": newStations, "mile": mile})
        this.refs.mileSelect.value = "default";
    }

    render() {
        console.log("main state");
        console.log(this.state.stations);
        console.log("mile");
        console.log(this.state.mile);

        return (

            <div className="main_box">
                <div className='select_box'>
                    <div className="filter_box">

                        <select tabIndex="1"
                            ref="mileSelect"
                            className="dropdown"
                            role="menuitem" aria-label="mile selector dropdown"
                            onChange={(event) => this.selectAnswer()}>

                            <option role="menuitem" value="default">Distance Filter</option>
                            <option role="menuitem" value="2">2 mile</option>
                            <option role="menuitem" value="4">4 miles</option>
                            <option role="menuitem" value="6">6 miles</option>
                        </select>
                    </div>
                </div>


                <div className='info_box'>
                    <ListBox stations={this.state.stations} />
                </div>

                <MapBox stations={this.state.stations} />

            </div>
        )
    }
}

export default MainBox;