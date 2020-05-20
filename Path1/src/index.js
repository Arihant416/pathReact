import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Stateless functional Component
// always returns JSX
function Books() {
    return (
        <section className='books'>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}
const Book = () => {
    return (
        <article className='book'>
            <CoverImage />
            <Title />
            <Author />
        </article>
    );
};
const CoverImage = () => (
    <img
        width='300'
        src='https://images-eu.ssl-images-amazon.com/images/I/41+6Zd6yPgL._AC_US327_FMwebp_QL65_.jpg'
        alt='Want'
    />
);
const Title = () => <h1 style={{ fontSize: '2rem', color: 'red' }}>Want</h1>;
const authorStyle = {
    letterSpacing: '10px',
    color: 'green',
};
const Author = () => <p style={authorStyle}>By Cindy Pon</p>;
ReactDOM.render(<Books />, document.getElementById('root'));
