import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';
//import ValidationComponent from './ValidationComponent/ValidationComponent';
//import CharComponent from './CharComponent/CharComponent';

const StyledButton = styled.button`
  background-color: ${ props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${ props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

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

    const styles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    //let chars = null;

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

      styles.backgroundColor = 'red';
      styles[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];

    if (this.state.persons.length >= 3) {
      classes.push('bold');
    }

    if (this.state.persons.length <= 1) {
      classes.push('red');
    }

    /* if (this.state.textInput.length > 0) {
      chars = this.state.textInput.split('').map( (value, index) => {
        return (
          <CharComponent clicked={ () =>this.removeChar(value) } key={`${index}${value}`} charValue={value} />
        );
      })
    } */

    return (
      <div className="App">
        <h1>My react app</h1>
        <p className={classes.join(' ') } >Testing dynamically applying classes</p>
        <StyledButton
          alt={this.state.showPersons ? 1 : 0}
          onClick={this.togglePersonsHandler}>
          Toggle Names
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
