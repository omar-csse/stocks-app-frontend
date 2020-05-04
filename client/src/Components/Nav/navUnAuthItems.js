import React from 'react'
import { NavLink } from 'react-router-dom';


const NavUnAuthItems = (props) => {

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/register" className="nav-item nav-link" activeClassName="nv-active">Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/login" className="nav-item nav-link" activeClassName="nv-active">Login</NavLink>
            </li>
        </ul>
    )
}


export default NavUnAuthItems