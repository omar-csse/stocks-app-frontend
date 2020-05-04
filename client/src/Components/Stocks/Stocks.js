import React, { useMemo } from 'react';
import './stocks.scss'
import useFetch from '../../hooks/useFetch'
import tableHeader from './header'
import Table from '../table/table'
import Error from '../error/error'
import Loading from '../loading/loading'


const Stocks = ({ query }) => {

    const options = useMemo(() => ({method: 'GET'}), []);
    const { data, error, res } = useFetch(`http://131.181.190.87:3000/stocks/symbols${query}`, options, query)

    const columns = useMemo(() => tableHeader, [])
    const memData = useMemo(() => data, [data])

    if (error) return <Error error={error} res={res} />
    if (data) return <Table classes="stocks-table" clickable={true} columns={columns} data={memData} />

    return <Loading classes="spin-lg" />
}

export default Stocks;