import React from 'react';

//COMPONENTS
import Header from './components/header';
import Location from './components/Location';


class App extends React.Component {


    render() {

        return (
            <div>
                <Header />
                <Location />
            </div>
        )
    }
}

export default App;