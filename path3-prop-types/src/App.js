import React, { Component } from 'react';
import './App.css';
//Controlled Uncontrolled Inputs
//JS
//Const input= document.getElementById('my Text')
//Const inputValue=input.value
//React
//value,onChange
class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        people: [],
    };
    handleChange = (e) => {
        // if (e.target.name === 'firstName') {
        //     const textVal = e.target.value;
        //     this.setState({
        //         firstName: textVal,
        //     });
        // }
        this.setState({
            [e.target.name]: [e.target.value],
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        // console.log(firstName + lastName);
        if (firstName.length > 0 && lastName.length > 0) {
            const person = ` ${firstName} ${lastName}`;
            this.setState({
                people: [...this.state.people, person],
                firstName: '',
                lastName: '',
            });
        }
    };
    render() {
        return (
            <section>
                <article>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='firstName'
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='lastName'
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </article>
                <article>
                    <h1>People</h1>
                    <div>{this.state.people}</div>
                </article>
            </section>
        );
    }
}

class App extends Component {
    render() {
        return <Form />;
    }
}

export default App;
