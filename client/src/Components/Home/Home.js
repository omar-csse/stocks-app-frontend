import React, { useEffect } from 'react';
import Logo from '../Logo/Logo';
import './Home.scss';

import Stocks from '../Stocks/Stocks'

const Home = (props) => {

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, []);

	return (
		<div className="home">
            <Logo class="logo text-center" height="300" width="300"/>
            <div className="stocks"> <Stocks /> </div>
		</div>
	);
}

export default React.memo(Home);
