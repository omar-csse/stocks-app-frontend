import React from 'react'
import './loading.scss'


const Loading = ({ classes }) => {

    return (
        <div className="loading">
            <div className={`spinner ${classes}`}></div>
        </div>
    )
}


export default Loading