import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Person = ({ img, name, job, children }) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <article className='person'>
            <img src={url} alt={`${img}`} />
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    );
};

const PersonList = () => {
    return (
        <section className='person-list'>
            <Person img='34' name='John Doe' job='Developer'>
                <p>Part time Trainer</p>
            </Person>
            <Person img='35' name='Susanne Doe' job='Analyst' />
            <Person img='36' name='Billy Doe' job='Designer' />
        </section>
    );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById('root'));
