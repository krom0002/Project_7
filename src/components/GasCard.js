import React from 'react';



class GasCard extends React.Component {


    render() {
        // console.log(this.props.user_latitude);
        // console.log(this.props);
        return (
            <div className='gas_card'>

                <div className='station_info'>
                    <div className='station_name'>Shell</div>
                    <div className='address'>123 main st.</div>
                    <div className='city'>{this.props.user_latitude}</div>
                </div>

                <div className='gas_prices'>
                    <div className='regular'>regular: $1.50</div>
                    <div className='mid_grade'>mid-grade: $1.50</div>
                    <div className='premium'>premium: $1.50</div>
                </div>
            </div>
        )
    }
}

export default GasCard;