import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor() {
        super();
        this.inputRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // Use it for older approach
        //this.inputRef.focus();
        this.inputRef.current.focus();
        console.log('[Person.js] Auth context authenticated: ', this.context.authenticated);
    }

    render() {
        return(
            <Aux>
                <p>{ this.context.authenticated ? 'Authenticated' : 'Please login'}</p>
                <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}</p>
                {this.props.children}
                <input
                    type="text"
                    //ref={ (inputRef) => {this.inputRef = inputRef} }
                    ref={this.inputRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);