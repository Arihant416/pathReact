import React, { Component } from 'react';
import './App.css';
//Controlled Uncontrolled Inputs
//JS
//Const input= document.getElementById('my Text')
//Const inputValue=input.value
//React
//value,onChange
class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.refs.myName;
        const nameVal = name.value;
        const email = this.email.value;

        const text = this.refs.myText;
        text.style.color = 'red';
        console.log(email, nameVal, text);
    };
    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref='myName' />
                    <input
                        type='email'
                        ref={(orange) => (this.email = orange)}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <p ref='myText'>Hello world</p>
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
