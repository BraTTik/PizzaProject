import React from 'react';
import './FormField.css';

export const FormField = ({ 
    name, 
    label, 
    normalize = (value) => value, 
    inputRef, 
    errors, 
    style,
    ...inputParams}) => {

    return (
        <div className="form-field" style={style}>
            <label className="form-label" id={`${name}-label`} htmlFor={name}>{ label }</label>
            <input 
                className={`form-input ${errors&&"is-error"}`}
                aria-labelledby={`${name}-label`}
                name={name}
                id={name}
                ref={inputRef}
                onChange = { e => e.target.value = normalize(e.target.value)}
                {...inputParams}
            />
            <p className="form-error">{errors && 'Error: ' + errors.message}</p>
        </div>
    )
}