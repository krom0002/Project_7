import React from 'react';

class SelectBox extends React.Component {


    render() {

        // console.log(this.props.user_latitude);
        // console.log(this.props);

        return (

            <div className='select_box'>

                <form className="filter_box">

                    <label className="label">Gas Type Filter</label>
                    <input type="text" className="filter" id="address" />
                    <button className='button'
                        onClick={this.props.getMyLocation}
                    >Get Location</button>

                </form>
            </div>

        )
    }
}

export default SelectBox;