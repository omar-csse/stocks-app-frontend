import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import './Nav.scss';
import btn from './btn.svg'
import useAuth from '../../hooks/useAuth'
import AuthItems from './AuthItems'
import UnAuthItems from './UnAuthItems'


const Nav = (props) => {

    const { loggedIn } = useAuth()

    const getBrowserMode = () => {
        if (!window.matchMedia) return;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    const getMode = () => {
        const isMode = "dark" in localStorage;
        const browserMode = getBrowserMode();

        if (isMode) return JSON.parse(localStorage.getItem("dark"))
        else if (browserMode) return true

        return false
    }

    const [darkMode, setDarkMode] = useState(getMode())

    useEffect(() => {
        document.body.classList = darkMode ? "dark" : "light";
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode])

    const handleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <nav id="mainnav" className="navbar navbar-expand-md">
            <div className="container my-2">
                <Logo class="navlogo mb-1" anchorclass="navbar-logo" height="55" width="55"/>
                
                <div className="toggle-container">
                    <label className="toggle" htmlFor="checkbox">
                        <span className="sun-light">☀︎</span>
                        <input checked={darkMode} onChange={handleDarkMode} id="checkbox" className="checkbox" type="checkbox" />
                        <label htmlFor="checkbox" />
                        <span className="moon-light">☾</span>
                    </label>
                </div>

                <button className="navbar-toggler navbar-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <img src={btn} alt="btn" height="45" width="45"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    { loggedIn ? <AuthItems /> :  <UnAuthItems /> }
                </div>
            </div>
        </nav>
    );
}

export default Nav;