import React from 'react';

import classes from './Cockpit.css';

const cockpit = props => {

    let assignedClasses = [];
    let btnClass = [''];

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length >= 3) {
      assignedClasses.push(classes.bold);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.red);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>My react app</h1>
            <p className={assignedClasses.join(' ') } >Testing dynamically applying classes</p>
            <button
            className={btnClass}
            onClick={props.clicked}>
            Toggle Names
            </button>
        </div>
    );
}

export default cockpit;