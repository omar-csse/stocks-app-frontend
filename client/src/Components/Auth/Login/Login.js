import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { validate } from './validation';
import { Form, Field } from 'react-final-form'
import Loading from '../../Loading/Loading'
import doAuthHeaders from '../authHeaders'


const Login = (props) => {

    const [ data, setData ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ response, setResponse ] = useState({status: '', text: ''})

	const renderInput = ({input, meta, type, placeholder}) =>
		<div className="position-relative form-group">
			<input placeholder={placeholder} className={`form-control ${meta.touched && meta.invalid ? 'border-danger' : ''}`} type={type} {...input}/>
			{ meta.dirty && meta.invalid && <div className="invalid-feedback d-block text-left">{meta.error}</div>}
			{ !meta.dirty && meta.touched && <div className="invalid-feedback d-block text-left">Cannot be empty</div>}
		</div>

	const onSubmit = (values) => {
        
        setLoading(true)
        console.log(values)

        fetch('http://131.181.190.87:3000/user/login/', doAuthHeaders(values))
            .then(res => {
                setResponse({status: res.status, text: res.statusText})
                return res.json()
            })
            .then(data => {
                console.log(data)
                data.token ? localStorage.setItem("_tkn", data.token) : setData(data)
            })
            .catch(err => setError(err))
            .then(setLoading(false))
    }
    
    if (response.status === 200) return <Redirect to="/" />

	return (
		<div className="login">
			<Form onSubmit={onSubmit} validate={validate}>
				{({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                    <div className="text-danger mb-3"> {error ? error : ''} </div>
                    <div className="text-danger mb-4"> {data.error ? data.message : ''} </div>
					<Field placeholder="email" type="email" name="email" component={renderInput} />
					<Field placeholder="password" type="password" name="password" component={renderInput} />
					<div className="position-relative form-group text-center mt-5">
						<button type="submit" disabled={submitting} className="login-btn">Login</button>
                        { loading ? <Loading classes="spin-sm" /> : ''}
					</div>
					<div className="position-relative form-group mt-5 pb-5 text-center">
						<label>New to stocks app? <Link to="/register">Register here</Link></label>
					</div>
				</form>}
			</Form>
		</div>
	);
}

export default Login;