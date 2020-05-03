import React from 'react'
import './Error.scss'


const Error = ({error, res}) => {

    return (
        <div className="error-box">
            <div className="error-message shadow">
                <h2><i>{res.status}</i> {res.text}</h2>
                <h5>{error.message ? error.message : error}</h5>
            </div>
        </div>
    )
}


export default Error