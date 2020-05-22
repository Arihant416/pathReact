import React, { Component, Fragment } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
export class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
            </Fragment>
        );
    }
}

export default App;
