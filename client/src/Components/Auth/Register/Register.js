import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validate } from './validation';
import { Form, Field } from 'react-final-form'
import Loading from '../../Loading/Loading'
import Registered from './Registered'
import doAuthHeaders from '../authHeaders'


const Register = (props) => {

    const [ email, setEmail ] = useState('')
    const [ data, setData ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ response, setResponse ] = useState({status: '', text: ''})

	const renderInput = ({input, meta, type, placeholder}) =>
		<div className="form-group">
			<input placeholder={placeholder} className={`form-control ${meta.touched && meta.invalid ? 'border-danger' : ''}`} type={type} {...input}/>
			{ meta.dirty && meta.invalid && <div className="invalid-feedback d-block text-left">{meta.error}</div>}
			{ !meta.dirty && meta.touched && <div className="invalid-feedback d-block text-left">Cannot be empty</div>}
		</div>

    const onSubmit = (values) => {

        setLoading(true)
        setEmail(values.email)

        fetch('http://131.181.190.87:3000/user/register/', doAuthHeaders(values))
            .then(res => {
                setResponse({status: res.status, text: res.statusText})
                return res.json()
            })
            .then(data => setData(data))
            .catch(err => setError(err))
            .then(setLoading(false))
    }

    if (response.status === 201) return <Registered email={email} />

	return (
		<div className="register">
			<Form onSubmit={onSubmit} validate={validate}>
				{({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                    <div className="text-danger mb-3"> {error ? error : ''} </div>
                    <div className="text-danger mb-4"> {data.error ? data.message : ''} </div>
					<Field placeholder="email" type="email" name="email" component={renderInput} />
					<Field placeholder="password" type="password" name="password" component={renderInput} />
					<div className="position-relative form-group mt-5">
						<button type="submit" disabled={submitting} className="register-btn">Register</button>
                        { loading ? <Loading classes="spin-sm" /> : ''}
					</div>
					<div className="position-relative form-group mt-5 pb-5 text-center">
						<label>Already a member? <Link to="/login">Login</Link></label>
					</div>
				</form>}
			</Form>	
		</div>
	);
}

export default Register;