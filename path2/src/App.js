//State, this.setState= hold/access/change data of Component
//Props are read only
import React, { Component } from 'react';
import BookList from './BookList';
const App = () => {
    return (
        <section>
            <h1>This is our Application</h1>
            <BookList />
        </section>
    );
};

export default App;
