import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import './stock.scss';
import Stock from '../stock/stock'
import useAuth from '../../hooks/useAuth'
import Emoji from '../emoji/emoji'


const StockPage = (props) => {

    const { loggedIn } = useAuth()
    const { symbol } = useParams();
    const location = useLocation();
    const [ isLoading, setIsLoading ] = useState(false)
    const [stockname, setStockName] = useState(null)
    const [query, setQuery] = useState(symbol.toUpperCase())
    const [fromD, setFromD] = useState(new Date());
    const [toD, setToD] = useState(new Date());
    const [Chart, setChart] = useState(false);

    useEffect(() => {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }, []);

    useEffect(() => {
        setStockName(location.state ? location.state.stockname : null)
    }, [setStockName, location])

    useEffect(() => { return () => localStorage.setItem('stockpath', `/stock/${symbol}`) }, [symbol])

    const fetchStock = useCallback((e) => {
        e.preventDefault()
        if (isLoading || !loggedIn) return
        setIsLoading(true)
        setQuery(`authed/${symbol.toUpperCase()}?from=${fromD}&to=${toD}`)
        setChart(true)
        setIsLoading(false)
    }, [isLoading, symbol, loggedIn, fromD, toD])

    const getStockname = () => {
        let storageStockname = localStorage.getItem('stockname')
        return stockname || storageStockname || ''
    }

	return (
		<div className="stock">
            <div className="form-stock">
                <h2>{symbol.toUpperCase()} - {getStockname()}</h2>
                <form className={'form-inline ' + (!loggedIn ? 'unauth-form': null) }>
                    <DatePicker className="date-btn" selected={fromD} onChange={date => setFromD(date)} />
                    <h4 className="date-icon">&#x2192;</h4>
                    <DatePicker id="d-btn2" className="date-btn" selected={toD} onChange={date => setToD(date)} />
                    <button type="submit" disabled={isLoading} onClick={fetchStock} className={`comm-btn search-btn`}>Search</button>
                </form>
            </div>
            <div className="auth-message">
                {!loggedIn ? <Link to='/login'><Emoji symbol="🔒"/> Login to access stock history</Link> : null}
            </div>
            <Stock chart={Chart} symbol={symbol.toUpperCase()} query={query} /> 
		</div>
	);
}

export default React.memo(StockPage);
