import React from 'react'
import * as emailValidator from 'email-validator';


const passwordRegExp = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);


const renderInput = ({input, meta, type, placeholder}) =>
    <div className="position-relative form-group form-input">
        <input placeholder={placeholder} className={`comm-input ${meta.touched && meta.invalid ? 'border-danger' : ''}`} type={type} {...input}/>
        { meta.dirty && meta.invalid && <div className="invalid-feedback d-block">{meta.error}</div>}
        { !meta.dirty && meta.touched && <div className="invalid-feedback d-block">Cannot be empty</div>}
    </div>


const validate = (values, login) => {
    const errors = {}

	if (!emailValidator.validate(values.email) || values.email === undefined) {
        errors.email = 'Please, enter a valid email';
	}

	if (!passwordRegExp.test(values.password)) {
		errors.password = login ? 'Invalid password' : 'password must contain (letters, numbers) and be > 8';;
	}

	return errors;
}

const getErrorMessage = (error) => {
    if (error.data === undefined) {
        return error.message
    } 
    return error.data.message
}


export { renderInput, validate, getErrorMessage }