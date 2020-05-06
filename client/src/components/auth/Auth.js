import React, { useEffect } from 'react';
import LoginPage from './login/login.page';
import RegisterPage from './register/register.page';
import './auth.scss';


const Auth = (props) => {

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, []);

    return (
        <section className="form auth">
            {props.path === '/login' ? <LoginPage /> : <RegisterPage />}
        </section>
    );
}


export default Auth;