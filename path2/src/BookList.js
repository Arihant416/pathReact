import React, { Component } from 'react';
import Book from './Book';
import booksData from './BookData';
export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: booksData,
        };
    }

    handleDelete = (id) => {
        const sortedBooks = this.state.books.filter((item) => item.id !== id);
        this.setState({ books: sortedBooks });
    };

    render() {
        return (
            <section>
                <h3>This is our BookList</h3>
                {this.state.books.map((item, index) => (
                    <Book
                        info={item}
                        key={item.id}
                        handleDelete={this.handleDelete}
                    ></Book>
                ))}
            </section>
        );
    }
}
