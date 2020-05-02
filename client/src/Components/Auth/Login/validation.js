import * as emailValidator from 'email-validator';
import { passwordRegExp } from '../Regexp'


export const validate = values => {
	const errors = {}

	if (!emailValidator.validate(values.email)) {
		if (values.email === undefined) {
			errors.email = 'Enter a valid username or email';
		}
	}

	if (!passwordRegExp.test(values.password)) {
		errors.password = 'Invalid password';
	}

	return errors;
}