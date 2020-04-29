import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Home.scss';


const Home = (props) => {

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, []);

	return (
		<div className="home">
			<div className="left">
				<h1>Stocks App</h1>
				<p className="pt-3">Using modern visualization approach</p>
				<form>
					<Link to="/login" className="login-btn btn">Log in</Link>
					<Link to="/signup" className="signup-btn btn">Sign up</Link>
				</form>	
			</div>
			<div className="right">
				<Logo class="logo" height="300" width="300"/>
			</div>
		</div>
	);
}

export default Home;
