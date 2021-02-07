import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
//import ValidationComponent from './ValidationComponent/ValidationComponent';
//import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Kedar', age: 27 },
      { id: 2, name: 'Manas', age: 23 },
      { id: 3, name: 'Gaurav', age: 27 }
    ],
    showPersons: false,
    textInput: ''
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 }
      ]
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => id === p.id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  inputChangeHandler = event => {
    this.setState({ textInput: event.target.value});
  }

  removeChar = (char) => {
    const chars = this.state.textInput.split('').filter(c => char !== c);
    this.setState({ textInput: chars.join('')});
  }

  render() {

    let persons = null;
    //let chars = null;
    let btnClass = [''];

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map( (person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePerson(index)}
              changed={(e) => this.nameChangeHandler(e, person.id)}
            />
          );
        })}
        </div>
      );

      /* styles.backgroundColor = 'red';
      styles[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      } */
      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (this.state.persons.length >= 3) {
      assignedClasses.push(classes.bold);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.red);
    }

    /* if (this.state.textInput.length > 0) {
      chars = this.state.textInput.split('').map( (value, index) => {
        return (
          <CharComponent clicked={ () =>this.removeChar(value) } key={`${index}${value}`} charValue={value} />
        );
      })
    } */

    return (
      <div className={classes.App}>
        <h1>My react app</h1>
        <p className={assignedClasses.join(' ') } >Testing dynamically applying classes</p>
        <button
        className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle Names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
