import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// Props (Properties)=Arguments to Components

//Destructuring
const People = () => {
    const friends = [
        { name: 'John', job: 'Developer', age: 23, company: 'Apple' },
        { name: 'Arihant', job: 'MERN Dev', age: 21, company: 'Microsoft' },
        {
            name: 'Shorya',
            job: 'Senior Full stack Developer',
            age: 22,
            company: 'Google',
        },
    ];
    return (
        <section>
            <Person person={friends[0]} />
            <Person person={friends[1]} />
            <Person person={friends[2]} />
        </section>
    );
};

// const showPerson = ({ name, age }) => {
//     console.log(name, age);
// };
// showPerson(person);

const Person = ({ person: { name, job, age, company } }) => {
    console.log(name);
    // const { name, job, age, company } = props.person;

    return (
        <article>
            <h1>{name}</h1>
            <p>{job}</p>
            <p>{age}</p>
            <p>{company}</p>
            <hr />
        </article>
    );
};

ReactDOM.render(<People />, document.getElementById('root'));
