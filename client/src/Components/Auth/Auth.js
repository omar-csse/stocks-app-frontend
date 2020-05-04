import React, { useEffect } from 'react';
import Login from './login/login';
import Register from './register/register';
import './auth.scss';


const Auth = (props) => {

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, []);

    return (
        <section className="form auth">
            {props.path === '/login' ? <Login /> : <Register />}
        </section>
    );
}

export default Auth;