import React, { useMemo } from 'react';
import './Stocks.scss'
import useFetch from '../../hooks/useFetch'
import tableHeader from './Header'
import Table from '../Table/Table'
import Error from '../Errors/Error'
import Loading from '../Loading/Loading'


const Stocks = ({ query }) => {

    const options = useMemo(() => ({method: 'GET'}), []);

    const { data, error, res } = useFetch(`http://131.181.190.87:3000/stocks/symbols${query}`, options, query)

    const columns = useMemo(() => tableHeader, [])
    const memData = useMemo(() => data, [data])

    if (error) return <Error error={error} res={res} />
    if (data) return data.error ? <Error error={data} res={res} /> : <Table columns={columns} data={memData} />

    return <Loading />
}

export default Stocks;