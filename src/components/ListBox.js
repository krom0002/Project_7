import React from 'react';
import GasCard from './GasCard';


class ListBox extends React.Component {

    render() {

        return (

            <div className='list_box'>
                <GasCard user_latitude={this.props.user_latitude}
                    user_longitude={this.props.user_longitude} />

            </div>
        )
    }
}

export default ListBox;