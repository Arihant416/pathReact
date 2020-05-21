//State, this.setState= hold/access/change data of Component
//Props are read only
import React from 'react';
import BookList from './BookList';
import './App.css';
const App = () => {
    return (
        <section>
            <BookList />
        </section>
    );
};

export default App;
