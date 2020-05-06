import React from 'react'
import './error.scss'


const Error = ({error, classes}) => {

    return (
        <div className="error-box">
            <div className={`error-message shadow ${classes}`}>
                <h2><i>{error.res ? `${error.res.status} ${error.res.statusText}` : null}</i></h2>
                <h5>{error.data ? error.data.message : null}</h5>
                <h5>{error.message ? error.message : null}</h5>
            </div>
        </div>
    )
}


export default Error