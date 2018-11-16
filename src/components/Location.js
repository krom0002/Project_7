import React from 'react';

//COMPONENTS
import MainBox from './MainBox';

class Location extends React.Component {

    constructor(props) {

        super(props)
        this.state = {

            user_latitude: undefined,
            user_longitude: undefined,
            // station_list: [this.get_data.station_list]
        }
    }

    getMyLocation = async (e) => {
        e.preventDefault();
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {

                this.setState({
                    user_latitude: position.coords.latitude,
                    user_longitude: position.coords.longitude,
                })

            }, (error) => {

                this.setState({user_latitude: 'error-lat', user_longitude: 'error-long'})
            })
        }
    }


    render() {
        // console.log(this.state.user_longitude);
        // console.log(this.props);
        return (

            <div>
                <MainBox
                    getMyLocation={this.getMyLocation}
                    user_latitude={this.state.user_latitude}
                    user_longitude={this.state.user_longitude} />
            </div>
        )
    }
}

export default Location;