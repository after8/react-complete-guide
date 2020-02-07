import React, { Component, /* useState */ } from 'react';
import './App.css';
import Person from './Person/Person';

// Class Component with local State
class App extends Component {
  state = {
     persons: [
         { name: 'Max', age: 28 },
         { name: 'Manu', age: 29 },
         { name: 'Stephanie', age: 27 },
     ],
     otherState: 'Test'
  }

  switchNameHandler = () => {
    // Component Object that we extend has a method call setState()
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Raching</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App written without JSX'));
  }
}

export default App;


// Functional Componentent with useState Hook

// const app = props => {

//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//        { name: 'Max', age: 28 },
//        { name: 'Manu', age: 29 },
//        { name: 'Stephanie', age: 27 },
//    ],
//   });

//   const [otherState, setOtherState] = useState('Another State String');

//   const switchNameHandler = () => {
//     // In difference to class componentent,
//     // the setPersonState is not merging the state it is overwriting
//     // that's why you have to merge manually
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 26 },
//       ],
//       // otherState: personsState.otherState -> or use multipe useState-Calls
//     });
//   };


//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <button onClick={switchNameHandler}>Switch</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Raching</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
    
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App written without JSX'));

// }

// export default app;
