import React from 'react';

const Input = ({input, meta: {touched, error}, type, min, max, step}) => (
    <>
        <input {...input} type={type} min={min} max={max} step={step} autoComplete="off" />
        {touched && ((error && <span>{error}</span>))}
    </>
)

export default Input;