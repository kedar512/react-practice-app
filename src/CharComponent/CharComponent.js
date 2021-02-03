import React from 'react';
import './CharComponent.css';

const charComponent = props => {

    return(
        <div onClick={props.clicked} className='CharClass'>
            {props.charValue}
        </div>
    );
}

export default charComponent;