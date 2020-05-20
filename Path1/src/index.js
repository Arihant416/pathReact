import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// Props (Properties)=Arguments to Components

const People = () => {
    return (
        <section>
            <Person name='Arihant' job='Full Stack Developer' />
            <Person name='Aryan' job='Security Architect' />
            <Person name='Shorya' job='Database Admin' />
            <Person name='Kaushal' job='AWS Architect' />
        </section>
    );
};

const Person = (props) => {
    console.log(props);

    return (
        <article>
            <h1>{props.name}</h1>
            <p>{props.job}</p>
            <hr />
        </article>
    );
};

ReactDOM.render(<People />, document.getElementById('root'));
