import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import tableHeader from './header'
import Table from '../table/table'
import Error from '../error/error'
import Loading from '../loading/loading'
import './stock.scss'


const Stock = (props) => {

    const { symbol } = useParams();
    const options = useMemo(() => ({method: 'GET'}), []);
    const { data, error, res } = useFetch(`http://131.181.190.87:3000/stocks/${symbol}`, options)

    const columns = useMemo(() => tableHeader, [])
    const memData = useMemo(() => data, [data])

    if (error) return <Error error={error} res={res} classes="stock-error"/>
    if (data) return <Table classes="stock stock-table" clickable={false} columns={columns} data={[memData]} />

    return <Loading classes="stock spin-lg" />
}


export default Stock