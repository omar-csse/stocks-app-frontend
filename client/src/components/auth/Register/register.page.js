import React, { useState, useEffect } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import Loading from '../../loading/loading'
import Registered from './registered'
import useAsync from '../../../hooks/useAsync'
import useAuth from '../../../hooks/useAuth'
import { renderInput, validate } from '../helper.functions.js'


const RegisterPage = (props) => {

    const { status, isLoading, error, run } = useAsync()
    const { register, loggedIn } = useAuth()
    const [ email, setEmail ] = useState('')

    useEffect(() => { localStorage.removeItem("stockpath") }, [])

    const onSubmit = (values) => {
        setEmail(values.email)
        run(register(values))
    }

    if (status === 'resolved') return <Registered email={email} />

    if (loggedIn) return <Redirect to="/" />

	return (
        <div className="register">
            <Form onSubmit={onSubmit} validate={(values) => validate(values, false)}>
                {({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                    <div className="text-danger error-msg"> {error ? error.data.message : ''} </div>
                    <Field placeholder="email" type="email" name="email" component={renderInput} />
                    <Field placeholder="password" type="password" name="password" component={renderInput} />
                    <div className="loading-btn">
                        <button type="submit" disabled={submitting} className="comm-btn reg-btn">Register</button>
                        { isLoading ? <Loading classes="spin-sm" /> : null }
                    </div>
                    <div className="form-group mt-5 pb-5">
                        <label>Already a member? <Link to="/login">Login</Link></label>
                    </div>
                </form>}
            </Form>	
        </div>
	);
}

export default RegisterPage;