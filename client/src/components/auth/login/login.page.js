import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import Loading from '../../loading/loading'
import useAsync from '../../../hooks/useAsync'
import useAuth from '../../../hooks/useAuth'
import { renderInput, validate, getErrorMessage } from '../../../utlis/auth.helper.js'


const LoginPage = (props) => {

    const { status, isLoading, error, run } = useAsync()
    const { login, loggedIn } = useAuth()

	const onSubmit = (values) => run(login(values))

    if (status === 'resolved' || loggedIn) {
        return <Redirect to={localStorage.getItem('stockpath') || '/'} />
    }

	return (
        <div className="login">
            <Form onSubmit={onSubmit} validate={(values) => validate(values, true)}>
                {({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                    <div className="text-danger error-msg"> {error ? getErrorMessage(error) : null} </div>
                    <Field placeholder="email" type="email" name="email" component={renderInput} />
                    <Field placeholder="password" type="password" name="password" component={renderInput} />
                    <div className="loading-btn">
                        <button type="submit" disabled={submitting} className="comm-btn login-btn">Login</button>
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

export default LoginPage;