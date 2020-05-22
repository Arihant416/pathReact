import React, { Component, Fragment } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <TourList />
            </Fragment>
        );
    }
}

export default App;
