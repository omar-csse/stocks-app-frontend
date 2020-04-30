import React from 'react'
import './Error.scss'


const Error = ({error, res}) => {

    return (
        <div className="error">
            <h2>Error: <i>{res.status}</i> - {res.text}</h2>
            <h5>{error.message}</h5>
        </div>
    )
}


export default Error