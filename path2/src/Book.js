//State is Immutable
//Shallow Merge
//this.setState({})
import React, { Component } from 'react';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
    }
    addCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    lowerCount = () => {
        this.setState({ count: this.state.count - 1 });
    };
    resetCount = () => {
        this.setState({ count: 0 });
    };
    render() {
        const { img, title, author } = this.props.info;
        return (
            <article className='book'>
                <img src={img} width='150' alt='book' />
                <div>
                    <h4>Book Title : {title}</h4>
                    <h6>Author : {author}</h6>
                    <h4>Count : {this.state.count}</h4>
                    <button type='button' onClick={this.addCount}>
                        Add Count
                    </button>
                    <button type='button' onClick={this.lowerCount}>
                        Decrementer
                    </button>
                    <button type='button' onClick={this.resetCount}>
                        Reset Count
                    </button>
                </div>
            </article>
        );
    }
}
