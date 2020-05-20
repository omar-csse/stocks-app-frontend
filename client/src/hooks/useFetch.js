import { useEffect, useState } from 'react';
import client from '../utlis/api.client'


const useFetch = (endpoint, deps) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const abortController = new AbortController()
        const signal = abortController.signal;

        setLoading(true)
        client(endpoint)
            .then(data => {
                if (!signal.aborted) {
                    setData(data)
                    setError(null)
                }
            })
            .catch(err => !signal.aborted ? setError(err) : null)
            .finally(!signal.aborted ? setLoading(false) : null)

        return () => { abortController.abort() };

    }, [endpoint, deps])
    
    return { data, error, loading }
}


export default useFetch;