import React, { Component } from 'react';
import Button from './Button';
//Prop Drilling Passing Methods to Children

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
    }

    render() {
        const { img, title, author } = this.props.info;
        const { handleDelete } = this.props;
        return (
            <article className='book'>
                <img src={img} width='150' alt='book' />
                <div>
                    <h4>Book Title : {title}</h4>
                    <h6>Author : {author}</h6>
                    <Button handleDelete={handleDelete} />
                </div>
            </article>
        );
    }
}
