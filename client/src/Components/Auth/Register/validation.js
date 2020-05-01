import * as emailValidator from 'email-validator';
import { passwordRegExp } from '../Regexp.js'


export const validate = values => {
	const errors = {}

	if (!emailValidator.validate(values.email)) {
        errors.email = 'Please, enter a valid email';
    }
	if (!passwordRegExp.test(values.password)) {
		errors.password = 'password must contain (A,a,digit, special char) and be > 8';
	}

	return errors;
}