import React from 'react';
import { Field } from 'redux-form';
import Input from './Input';
import { isRequired } from '../validation';
import SelectInput from './SelectInput';


export default function ConditionalField(props) {
    const { type } = props;

    if (type === 'pizza') {
        return (
            <>
                <div className="single_input">
                    <label htmlFor="no_of_slices">Number of slices</label>
                    <Field 
                        name="no_of_slices" 
                        component={Input} 
                        type="number" 
                        min="1"
                        max="16" 
                        validate={isRequired} 
                    />
                </div>
                <div className="single_input">
                    <label htmlFor="diameter">Diameter</label>
                    <Field 
                        name="diameter" 
                        component={Input} 
                        type="number" 
                        step="0.1" 
                        min="10" 
                        max="47.7" 
                        validate={isRequired} 
                    />
                </div>
            </>
        )
    } else if (type === 'soup') {
        return (
            <div className="single_input">
                <label htmlFor="spiciness_scale">Spiciness scale</label>
                <Field 
                    name="spiciness_scale" 
                    component={SelectInput} 
                    validate={isRequired} 
                    selectOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} 
                />
            </div>
        )
    } else if (type === 'sandwich') {
        return (
            <div className="single_input">
                <label htmlFor="slices_of_bread">Slices of bread</label>
                <Field 
                    name="slices_of_bread" 
                    component={Input} 
                    type="number" 
                    min="1" 
                    max="20" 
                    validate={isRequired} 
                />
            </div>
        )
    } else {
        return null;
    }
}
