import React, { useEffect, useState } from 'react';
import Logo from '../logo/logo';
import './home.scss';
import Stocks from '../stocks/stocks'


const Home = (props) => {

    const [industry, setIndustry] = useState('')

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, []);

    const handleInput = (e) => {
        const val = e.target.value
        val === '' ? setIndustry('') : setIndustry("?industry=" + val)
    }

    const handleSelect = (e) => {
        const val = e.target.value
        const index = e.target.selectedIndex
        document.getElementById("industry_input").value = ''
        index === 0 ? setIndustry('') : setIndustry("?industry=" + val)
    }

	return (
		<div className="home">
            <Logo class="logo text-center" height="300" width="300"/>
            <div className="stocks"> 
                <form className="filter-form-home form-inline">
                    <input placeholder="industry" id="industry_input" className="comm-input" onChange={handleInput}/>
                    <select className="comm-select" id="industry_select" onChange={handleSelect} >
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
