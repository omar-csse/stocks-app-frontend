import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import './Home.scss';

import Stocks from '../Stocks/Stocks'

const Home = (props) => {

    const [industry, setIndustry] = useState('')

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, []);

    const handleInput = (e) => {
        const val = e.target.value
        const index = e.target.selectedIndex
        if (index === 0 || val === '') setIndustry('')
        else setIndustry("?industry=" + val)
    }

	return (
		<div className="home">
            <Logo class="logo text-center" height="300" width="300"/>
            <div className="stocks"> 
                <form className="filter-form-home form-inline">
                    <input placeholder="industry" id="industry_input" className="form-control mx-5" onChange={handleInput}/>
                    <select className="form-control" id="industry_select" onChange={handleInput} >
                        <option>all industries</option>
                        <option>Health Care</option>
                        <option>Financials</option>
                        <option>Industrials</option>
                        <option>Real Estate</option>
                        <option>Consumer Discretionary</option>
                        <option>Materials</option>
                        <option>Information Technology</option>
                        <option>Energy</option>
                        <option>Consumer Staples</option>
                        <option>Telecommunication Services</option>
                        <option>Utilities</option>
                    </select>
                </form>
                <Stocks query={industry} /> 
            </div>
		</div>
	);
}

export default React.memo(Home);
