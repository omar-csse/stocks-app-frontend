import React from 'react'
import './error.scss'


const Error = ({error, res, classes}) => {

    return (
        <div className="error-box">
            <div className={`error-message shadow ${classes}`}>
                <h2><i>{res.status}</i> {res.text}</h2>
                <h5>{error.message ? error.message : error}</h5>
            </div>
        </div>
    )
}


export default Error