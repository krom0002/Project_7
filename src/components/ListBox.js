import React from 'react';
import GasCard from './GasCard';


class ListBox extends React.Component {

    render() {

        return (

            <div className='list_box'>
                <GasCard stations={this.props.stations} />
            </div>
        )
    }
}

export default ListBox;