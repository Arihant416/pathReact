import React, { Component } from 'react';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     console.log('You clicked me');
    //     console.log(this.state.count);
    // }
    handleClick = () => {
        console.log('You Clicked Me');
        console.log(this.state.count);
    };
    render() {
        //   console.log(this.props);
        const { img, title, author } = this.props.info;
        return (
            <article className='book'>
                <img src={img} width='150' alt='book' />
                <div>
                    <h4>Book Title : {title}</h4>
                    <h6>Author : {author}</h6>
                    <button type='button' onClick={this.handleClick}>
                        Add Count
                    </button>
                </div>
            </article>
        );
    }
}
