import React, { Component } from 'react';
import Book from './Book';
export default class BookList extends Component {
    state = {
        books: [
            {
                book: 'Book number 1',
                author: 'John Doe',
            },
            {
                book: 'Book number 2',
                author: 'Bob Doe',
            },
            {
                book: 'Book number 3',
                author: 'Ryan Doe',
            },
            {
                book: 'Book number 4',
                author: 'Smilga Instructor',
            },
        ],
    };
    //this.setState({}) is how we modify state
    render() {
        //   const books = this.state.books.map((item) => item.book);
        //Javascript Array Methods
        //forEach
        //map
        //reduce
        //filter
        return (
            <section>
                <h3>This is our BookList</h3>
                {this.state.books.map((item, index) => (
                    <Book info={item}></Book>
                ))}
            </section>
        );
    }
}
