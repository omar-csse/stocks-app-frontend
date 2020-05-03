import React from 'react'
import { NavLink } from 'react-router-dom';


const UnAuthItems = (props) => {

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/register" className="nav-item nav-link">Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
            </li>
        </ul>
    )
}


export default UnAuthItems