import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
//Props not passed at all
//isRequired defaultProp
const Person = ({ person: { img, name, age, info } }) => {
    return (
        <article>
            <img src={img} alt='person' />
            <h4>Name : {name}</h4>
            <h4>Age : {age}</h4>
            <h4>Info : {info || 'Default Info about the Person'}</h4>
        </article>
    );
};
Person.propTypes = {
    person: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        info: PropTypes.string.isRequired,
    }),
};
Person.defaultProps = {
    person: {
        info: 'Default Info about the Person',
    },
};
class PersonList extends Component {
    state = {
        people: [
            {
                id: 1,
                img: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
                name: 'Arihant',
                age: 24,
            },
            {
                id: 2,
                img: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
                name: 'Rishab',
                age: 23,
            },
            {
                id: 3,
                img: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
                name: 'XYZ',
                age: 23,
                info: 'Some info about xyz',
            },
        ],
    };
    render() {
        return (
            <section>
                {this.state.people.map((person) => (
                    <Person key={person.id} person={person} />
                ))}
            </section>
        );
    }
}

class App extends Component {
    render() {
        return <PersonList />;
    }
}

export default App;
