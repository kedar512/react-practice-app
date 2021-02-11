import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';


class Person extends Component {

    render() {
        return(
            <Aux>
                <div className={classes.Person}>
                    <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}</p>
                    {this.props.children}
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </Aux>
        );
    }
}

export default Person;