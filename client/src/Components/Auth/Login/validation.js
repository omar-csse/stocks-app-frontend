import * as emailValidator from 'email-validator';
import { passwordRegExp } from '../Regexp'


export const validate = values => {
	const errors = {}

	if (!emailValidator.validate(values.identifier)) {
		if (values.identifier === undefined) {
			errors.identifier = 'Enter a valid username or email';
		}
	}

	if (!passwordRegExp.test(values.password)) {
		errors.password = 'Invalid password';
	}

	return errors;
}