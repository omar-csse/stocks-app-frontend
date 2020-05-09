import React from 'react'
import { NavLink } from 'react-router-dom';


const NavUnAuthItems = (props) => {

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-item nav-link" activeClassName="nv-active">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/register" className="nav-item nav-link" activeClassName="nv-active">Register</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/login" className="nav-item nav-link" activeClassName="nv-active">Login</NavLink>
            </li>
        </ul>
    )
}


export default NavUnAuthItems