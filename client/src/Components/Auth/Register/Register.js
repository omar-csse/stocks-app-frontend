import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validate } from './validation';
import { Form, Field } from 'react-final-form'
import Loading from '../../Loading/Loading'
import getHeaders from '../../../utils/authHeaders'


const Register = (props) => {

    const [ submitted, setSubmitted ] = useState(false)
    const [ data, setData ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

	const renderInput = ({input, meta, type, placeholder}) =>
		<div className="form-group">
			<input placeholder={placeholder} className={`form-control ${meta.touched && meta.invalid ? 'border-danger' : ''}`} type={type} {...input}/>
			{ meta.dirty && meta.invalid && <div className="invalid-feedback d-block text-left">{meta.error}</div>}
			{ !meta.dirty && meta.touched && <div className="invalid-feedback d-block text-left">Cannot be empty</div>}
		</div>

    const onSubmit = (values) => {
        setSubmitted(true)
        setLoading(true)

        fetch('http://131.181.190.87:3000/user/register/', getHeaders(values))
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .then(setLoading(false))
            .then(setSubmitted(false))
    }
    
	return (
		<div className="register">
			<Form onSubmit={onSubmit} validate={validate}>
				{({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                    <div className="text-danger mb-3"> {error ? error : ''} </div>
                    <div className="text-danger mb-4"> {data.error ? data.message : ''} </div>
					<Field placeholder="email" type="email" name="email" component={renderInput}/>
					<Field placeholder="password" type="password" name="password" component={renderInput}/>
					<div className="position-relative form-group mt-5">
						<button type="submit" disabled={submitting} className="btn register-btn btn-lg w-50">Register</button>
                        { submitted || loading ? <Loading classes="spin-sm" /> : ''}
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