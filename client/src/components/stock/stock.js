import React, { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import useFetch from '../../hooks/useFetch'
import tableHeader from '../../utlis/stock.theader'
import Table from '../table/table'
import Error from '../error/error'
import Loading from '../loading/loading'
import { filterstock, prepChartData } from '../../utlis/filterstock'
import useAuth from '../../hooks/useAuth'
import './stock.scss'


const Stock = ({ symbol, query, chart }) => {

    const { loggedIn } = useAuth()
    const { data, error, res } = useFetch(`stocks/${loggedIn ? query : symbol}`)

    const columns = useMemo(() => tableHeader, [])
    const memData = useMemo(() => data ? filterstock(data) : data, [data])

    if (error) return <Error error={error} res={res} classes="stock-error"/>
    if (data) return (
        <div className="table-chart">
            <Table classes="stock-table mb-5" clickable={false} pgsize={6} columns={columns} data={memData} />
            { chart && loggedIn ? <Line data={prepChartData(data)} /> : null }
        </div>
    )

    return <Loading classes="stock spin-lg" />
}


export default Stock