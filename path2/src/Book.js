import React, { Component } from 'react';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            name: 'John',
            showInfo: false,
        };
    }

    handleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    };

    render() {
        const { id, img, title, author } = this.props.info;
        const checkinfo = (info) => {
            if (info === true) {
                return (
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officiis, quam.
                    </p>
                );
            } else {
                return null;
            }
        };
        return (
            <article className='book'>
                <img src={img} width='150' alt='book' />
                <div>
                    <h4>Book Title : {title}</h4>
                    <h6>Author : {author}</h6>
                    <button type='button' onClick={this.handleInfo}>
                        Toggle Info
                    </button>
                    {/* Functional Check */}
                    {checkinfo(this.state.showInfo)}
                    {/* Ternary Operator */}
                    {/* {this.state.showInfo ? (
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ea exercitationem blanditiis repudiandae
                            quaerat commodi non deserunt eum cumque eligendi, ad
                            dicta repellat voluptas eos aliquam aliquid atque
                            esse quam. Id!
                        </p>
                    ) : null} */}
                    {/* And Operator */}
                    {/* {this.state.showInfo && (
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Voluptate illo quis necessitatibus ipsa ullam
                            suscipit, alias, eligendi nesciunt quaerat libero
                            sed fuga impedit enim accusantium totam tempora
                            consequatur? Aut, illo.
                        </p>
                    )} */}
                </div>
            </article>
        );
    }
}
