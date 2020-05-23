import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
//Install as Seperate module prop-types
//Built in type checking to validate props
//Array bool func number object string symbol
const Person = ({ img, name, age }) => {
    return (
        <article>
            <img src={img} alt='person' />
            <h4>Name : {name}</h4>
            <h5>Age : {age}</h5>
        </article>
    );
};
class PersonList extends Component {
    state = {
        people: [
            {
                id: 1,
                img: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
                name: 'Arihant',
                age: '24',
            },
            {
                id: 2,
                img: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
                name: 'Rishab',
                age: '22',
            },
        ],
    };
    render() {
        return (
            <section>
                {this.state.people.map((person) => (
                    <Person
                        key={person.id}
                        img={person.img}
                        name={person.name}
                        age={person.age}
                    />
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
