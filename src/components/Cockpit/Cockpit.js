import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = props => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    return () => {
      //use this return function to do clean up work like removing event listeners etc.
      console.log('[Cockpit.js] clean up work');
    }
  }, []); // Use empty array if you want some code to run only once when component is loaded

  useEffect( () => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] 2nd useEffect clean up work');
    }
  }, [props.persons]);

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
      <p className={assignedClasses.join(' ')} >Testing dynamically applying classes</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Names
            </button>
    </div>
  );
}

export default cockpit;