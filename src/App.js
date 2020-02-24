import React, { Component, /* useState */ } from 'react';
import './App.css';
import Person from './Person/Person';

// Class Component with local State
class App extends Component {
  state = {
     persons: [
         { id: '234kas', name: 'Max', age: 28 },
         { id: '62k34k', name: 'Manu', age: 29 },
         { id: '592fli', name: 'Stephanie', age: 26 },
     ],
     otherState: 'Test',
     showPersons: false,
  }

  deletePersonHandler = (personIndex) => {
    // Copy the full array to prevent mutating the orginial state
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Copy the full object to prevent mutating the orginial state
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // Inline Style possibility, scoped to this component
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          // This can be inefficient but it is one option to pass variables to the function
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
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
