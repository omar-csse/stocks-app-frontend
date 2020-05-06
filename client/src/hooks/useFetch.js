import { useEffect, useState } from 'react';
import client from '../utlis/api.client'


const useFetch = (endpoint, deps) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        client(endpoint)
            .then(data => {
                setData(data)
                setError(null)
            })
            .catch(err => setError(err))
            .finally(setLoading(false))

    }, [endpoint, deps])
    
    return { data, error, loading }
}


export default useFetch;