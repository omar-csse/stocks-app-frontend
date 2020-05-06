
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';


const Registered = ({ email }) => {

    const [ redirect, setRedirect ] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setRedirect(true), 500000)
        return () => window.clearTimeout(timer)
    }, [])

    if (redirect) return <Redirect to="/" />

    return (
        <div className="registered-card">
            <div className="shadow card">
                <h3 className="card-header registered-header">Thank you</h3>
                <div className="card-body registered-body">
                    <h6 className="registered-mail my-3"> Thank you {email} </h6>
                    <p> Will be directed to main page in <i>5</i> seconds. </p>
                    <p>For authorized access, please <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}


export default Registered
