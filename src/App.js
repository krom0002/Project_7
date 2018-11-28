import React from 'react';

//COMPONENTS
import Header from './components/header';
import MainBox from './components/MainBox';
import Footer from './components/Footer';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                {/* <SelectBox /> */}
                <MainBox />
                <Footer />
            </div>
        )
    }
}

export default App;