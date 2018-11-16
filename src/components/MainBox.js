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
        // let xhr = new XMLHttpRequest();

        let lat = this.props.user_latitude;
        let long = this.props.user_longitude;

        let url = new URL(`http://api.mygasfeed.com/stations/radius/${lat}/${long}/10/reg/distance/qye48e5m6h.json?`)

        fetch(url)
            .then((res) => res.json())
            .then((data) => console.log(data))

        // xhr.onload = function (props) {

        //     if (this.status === 200) {
        //         let station_list = JSON.parse(this.response);
        //         console.log(station_list);

        //     } else {
        //         console.log('no stations recieved');
        //     }
        // }

        // xhr.open('GET', url, true);
        // xhr.send();
    }


    render() {
        console.log(this.props.user_latitude);
        console.log(this.props.user_longitude);

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