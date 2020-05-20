// named and default imports and exports
// only one default export per module
// think of module as a file
//rfc functional Component
//rcc class based Component
import React from 'react';
import { age, name, person } from './data';
// import * as data from './data';
import Banner from './Components/Header/Banner';
const App = () => {
    return (
        <section>
            <p>This is my content</p>
            <Banner />
            <p>{name}</p>
            <p>{age}</p>
            <p>{person.name}</p>
            <p>{person.age}</p>
        </section>
    );
};
// const App = () => {
//     return (
//         <section>
//             <Banner />
//             <p>This is my content</p>
//             <p>{data.name}</p>
//             <p>{data.age}</p>
//             <p>{data.person.name}</p>
//             <p>{data.person.age}</p>
//         </section>
//     );
// };

export default App;
