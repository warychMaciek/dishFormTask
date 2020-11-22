import React, { useState } from 'react'
import { Field, reduxForm, formValueSelector, change, reset } from 'redux-form';
import TimeInput from './TimeInput';
import SelectInput from './SelectInput';
import { connect, useDispatch } from 'react-redux';
import ConditionalField from './ConditionalField';
import Input from './Input';
import { isRequired, timeValidation } from '../validation';
import { submitted } from '../submitReducer';
import SubmitConfirmation from './SubmitConfirmation';


async function submitToServer(data) {
    try {
      let response = await fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
}

let Form = (props) => {
    const { handleSubmit, typeValue, valid } = props;
    const dispatch = useDispatch();
    const [addedDish, setAddedDish] = useState({})

    const handleChange = () => {
        dispatch(change('dish_form', 'no_of_slices', ''));
        dispatch(change('dish_form', 'diameter', ''));
        dispatch(change('dish_form', 'spiciness_scale', ''));
        dispatch(change('dish_form', 'slices_of_bread', ''));
    }

    const onSubmit = (values) => {

        if (values.no_of_slices) {
            values.no_of_slices = parseInt(values.no_of_slices)
        }
        if (values.diameter) {
            values.diameter = parseFloat(values.diameter)
        }
        if (values.spiciness_scale) {
            values.spiciness_scale = parseInt(values.spiciness_scale)   
        }
        if (values.slices_of_bread) {
            values.slices_of_bread = parseInt(values.slices_of_bread) 
        }

        submitToServer(values)
            .then(data => setAddedDish(data))
            .then(dispatch(reset('dish_form')))
            .then(dispatch(submitted()))

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="single_input">
                    <label htmlFor="name">Name</label>
                    <Field 
                        name="name" 
                        component={Input} 
                        type="text" 
                        validate={isRequired} 
                    />
                </div>
                <div className="single_input">
                    <label htmlFor="preparation_time">Preparation time</label>
                    <Field 
                        name="preparation_time" 
                        component={TimeInput} 
                        validate={timeValidation} 
                    />
                </div>
                <div className="single_input">
                    <label htmlFor="type">Dish type</label>
                    <Field 
                        name="type" 
                        component={SelectInput} 
                        onChange={() => handleChange()} 
                        validate={isRequired} 
                        selectOptions={['pizza', 'soup', 'sandwich']} 
                    />
                </div>
                <ConditionalField type={typeValue} />
                <button disabled={!valid} type="submit">Submit</button>
            </form>
            <SubmitConfirmation data={addedDish} />
        </>
    )
}

Form = reduxForm({
    form: 'dish_form'
})(Form);


const selector = formValueSelector('dish_form');
Form = connect(
    state => {
        const typeValue = selector(state, 'type');        

        return { typeValue };
    }
)(Form);

export default Form;
