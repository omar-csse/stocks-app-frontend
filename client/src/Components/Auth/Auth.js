import React, { useEffect } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './Auth.scss';


const Auth = (props) => {

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, []);

    return (
        <section className="form">
            <div className="row align-items-center pt-5 mt-2">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 text-center">
                    <div className="form">
                        {props.path === '/login' ? <Login /> : <Signup />}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Auth;