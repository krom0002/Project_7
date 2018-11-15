import React from 'react';

//COMPONENTS
import SelectBox from './SelectBox';
import ListBox from './ListBox';
import MapBox from './MapBox';


class MainBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            address: "",
            city: "",
            station_latitude: undefined,
            station_longitude: undefined,
            reg_price: "",
            mid_price: "",
            prem_price: "",
            station_list: []
        };
        this.get_data = this.get_data.bind(this);
    }

    componentWillReceiveProps(props) {
        this.get_data(props);
    }

    componentDidMount(porps) {
        this.setState({station_list: this.get_data.station_list});
    }

    get_data = (props) => {
        let xhr = new XMLHttpRequest();

        // let lat = this.props.user_latitude;
        // let long = this.props.user_longitude;

        var url = new URL(`http://api.mygasfeed.com/stations/radius/29.4980868/-81.24282319999999/10/reg/distance/qye48e5m6h.json?`)

        xhr.onload = function (props) {
            if (this.status === 200) {
                var station_list = JSON.parse(this.response);
                console.log(station_list);
                return (station_list);


            } else {
                console.log('no stations recieved');
            }
        }
        xhr.open('GET', url, true);

        xhr.send();
    }


    render() {

        console.log(this.props.user_latitude);
        console.log(this.props.user_longitude);
        // console.log(this.props);


        return (

            <div className="main_box">

                <div className='info_box'>

                    <SelectBox
                        getMyLocation={this.props.getMyLocation}
                        user_latitude={this.props.user_latitude}
                        user_longitude={this.props.user_longitude} />

                    <ListBox
                        user_latitude={this.props.user_latitude}
                        user_longitude={this.props.user_longitude} />
                </div>

                <MapBox
                    station_list={this.props.station_list}
                    user_latitude={this.props.user_latitude}
                    user_longitude={this.props.user_longitude} />

            </div>
        )
    }
}

export default MainBox;