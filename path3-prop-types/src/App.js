import React, { Component, Fragment } from 'react';
import './App.css';
//React Fragments and this.setState() is asynchronous
//Functional this.setState
//NOTE::::: setState is asynchronous
class Counter extends Component {
    state = {
        count: 0,
    };
    handleIncrease = () => {
        console.log('Called First : ', this.state.count);
        this.setState(
            {
                count: this.state.count + 1,
            },
            () => console.log('called second :', this.state.count)
        );
        console.log('Called third : ', this.state.count);
    };
    handleDecrease = () => {
        console.log('Called First', this.state.count);
        this.setState((state, props) => {
            return { count: state.count - props.amount };
        });
        console.log('Called third:', this.state.count);
    };
    render() {
        return (
            <>
                <div style={{ margin: '3rem', fontSize: '2rem' }}>
                    <button type='button' onClick={this.handleIncrease}>
                        Increase
                    </button>
                    <span style={{ margin: '1rem' }}>
                        count : {this.state.count}
                    </span>
                    <button type='button' onClick={this.handleDecrease}>
                        Decrease
                    </button>
                </div>
            </>
        );
    }
}

class App extends Component {
    render() {
        return <Counter amount='2' />;
    }
}

export default App;
