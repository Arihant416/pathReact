//Stateless functional Components
//Class Based Components
//State , Life cycle Methods
//React Hoooks
//Classes - Syntactical Sugar for Constructor Functions
//Subclass of Component
//Extends from Component Class
//Inherits Functionality
// Component class is used to transfer from basic E6 class
import React, { Component } from 'react';
import { name, age, person } from './data';
import Banner from './Components/Header/Banner';
class App extends Component {
    render() {
        return (
            <section>
                <Banner />
                <p>This is my Content</p>
                <p>{name}</p>
                <p>{age}</p>
                <p>{person.name}</p>
            </section>
        );
    }
}

// const App = () => {
//     return (
//         <section>
//             <p>This is my content</p>
//             <Banner />
//             <p>{name}</p>
//             <p>{age}</p>
//             <p>{person.name}</p>
//             <p>{person.age}</p>
//         </section>
//     );
// };

export default App;
