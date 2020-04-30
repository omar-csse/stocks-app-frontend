import React, { useMemo } from 'react';
import useFetch from '../../hooks/useFetch'

import tableHeader from './Header'
import Table from '../Table/Table'

const Stocks = (props) => {

    const options = useMemo(() => ({
        method: 'GET',
    }), []);

    const { data, error, isLoading } = useFetch("http://131.181.190.87:3000/stocks/symbols", options)

    const columns = useMemo(() => tableHeader, [])
    const memData = useMemo(() => data, [data])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>error</div>

    return (
        <Table classes="table" columns={columns} data={memData || []} />
    );
}

export default React.memo(Stocks);