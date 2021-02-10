import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
    textInput: '',
    showCockpit: true
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

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePerson}
        changed={this.nameChangeHandler}
       />
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
        <button
          onClick={ () => { this.setState({ showCockpit: false }) }}
        >
          Remove Cockpit
        </button>
        {
          this.state.showCockpit ? <Cockpit
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          /> : null
         }
        {persons}
      </div>
    );
  }
}

export default App;
