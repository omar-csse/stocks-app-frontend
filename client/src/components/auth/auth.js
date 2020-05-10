import React, { useEffect } from 'react';
import LoginPage from './login/login.page';
import RegisterPage from './register/register.page';
import './auth.scss';


const Auth = ( { path } ) => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, [path]);

    return (
        <section className="form auth">
            {path === '/login' ? <LoginPage /> : <RegisterPage />}
        </section>
    );
}


export default Auth;