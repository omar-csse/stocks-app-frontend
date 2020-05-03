import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { validate } from './validation';
import { Form, Field } from 'react-final-form'
import Loading from '../../Loading/Loading'
import useAsync from '../../../hooks/useAsync'
import useAuth from '../../../hooks/useAuth'


const Login = (props) => {

    const { status, isLoading, error, run } = useAsync()
    const { login, loggedIn } = useAuth()

	const renderInput = ({input, meta, type, placeholder}) =>
		<div className="position-relative form-group form-input">
			<input placeholder={placeholder} className={`form-control ${meta.touched && meta.invalid ? 'border-danger' : ''}`} type={type} {...input}/>
			{ meta.dirty && meta.invalid && <div className="invalid-feedback d-block">{meta.error}</div>}
			{ !meta.dirty && meta.touched && <div className="invalid-feedback d-block">Cannot be empty</div>}
		</div>

	const onSubmit = (values) => run(login(values))

    if (status === 'resolved' || loggedIn) return <Redirect to="/" />
    
	return (
		<div className="login">
			<Form onSubmit={onSubmit} validate={validate}>
				{({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                    <div className="text-danger error-msg"> {error ? error.message : null} </div>
					<Field placeholder="email" type="email" name="email" component={renderInput} />
					<Field placeholder="password" type="password" name="password" component={renderInput} />
					<div className="loading-btn">
						<button type="submit" disabled={submitting} className="login-btn">Login</button>
                        { isLoading ? <Loading classes="spin-sm" /> : null }
					</div>
					<div className="mt-5 pb-5">
						<label>New to stocks app? <Link to="/register">Register here</Link></label>
					</div>
				</form>}
			</Form>
		</div>
	);
}

export default Login;