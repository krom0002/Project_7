import React from 'react';

const GasCard = (props) => {

    let stations = props.stations.map((station) => {

        if (station.length !== 0) {
            return (
                <div tabIndex="2" role="feed" className='gas_card' key={station.id}>
                    <div className='station_info'>
                        <div className='station_name'>{station.station}</div>
                        <div className='address'>{station.address}</div>
                        <div className='city'>{station.city}</div>
                        <div>distance: {station.distance}</div>
                    </div>

                    <div tabIndex="3" role="feed" className='gas_prices'>
                        <div className='regular'>regular: {station.reg_price}</div>
                        <div className='mid_grade'>mid-grade: {station.mid_price}</div>
                        <div className='premium'>premium: {station.pre_price}</div>
                    </div>
                </div >
            )
        } else {
            console.log("sorry, out of gas")
            return (<p>sorry, out of gas</p>)
        }
    });

    return (
        <div>{stations}</div>
    )

}

export default GasCard;