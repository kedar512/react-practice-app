import React from 'react';

const validationComponent = props => {
    const minLength = 5;
    const maxLength = 8;

    return(
        <p>{props.textInput.length > maxLength ? 'Lenght is too long' : (props.textInput.length < minLength ? 'Lenght is too short' : 'Length is correct')}</p>
    );
}

export default validationComponent;