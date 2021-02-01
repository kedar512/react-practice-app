import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {person as Person} from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Kedar', age: 27 },
      { name: 'Manas', age: 23 },
      { name: 'Gaurav', age: 27 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 }
      ]
    });
  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        { name: 'Manas', age: 23 },
        { name: 'Gaurav', age: 27 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Gaurav')}
            changed={this.nameChangeHandler}>
            <p>My hobbies are:</p>
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            >
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            >
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>My react app</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Names</button>
        {persons}
      </div>
    );
  }
}

export default App;
