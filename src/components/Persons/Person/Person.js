import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    render() {
        return(
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}</p>
                {this.props.children}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);