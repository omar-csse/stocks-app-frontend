import React, { useMemo } from 'react';
import './stocks.scss'
import useFetch from '../../hooks/useFetch'
import tableHeader from '../../utlis/stocks.theader'
import Table from '../table/table'
import Error from '../error/error'
import Loading from '../loading/loading'


const Stocks = ({ query }) => {

    const { data, error, loading } = useFetch(`stocks/symbols${query}`)

    const columns = useMemo(() => tableHeader, [])
    const memData = useMemo(() => data, [data])

    if (error) return <Error error={error} />
    if (data && !loading) return <Table classes="stocks-table" clickable={true} pgsize={25} columns={columns} data={memData} />

    return <Loading classes="spin-lg" />
}

export default Stocks;