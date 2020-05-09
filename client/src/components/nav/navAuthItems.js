import React from 'react'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'


const NavAuthItems = (props) => {

    const { logout } = useAuth()

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to="/" className="nav-item nav-link" activeClassName="nv-active">Home</NavLink>
            </li>
            <li className="nav-item">
                <button onClick={logout} className="nav-item nav-item-btn nav-link">Logout</button>
            </li>
        </ul>
    )
}


export default NavAuthItems