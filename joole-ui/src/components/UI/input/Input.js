import React from 'react';
import styles from './Input.module.css'

const input = props => {
    let inputElement = null;
    const inputClasses = [styles.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
     inputClasses.push(styles.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = 
            <span>
                <input 
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}/></span>;
            break;

        default:
            inputElement =
            <input {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}/>;
    }

    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;