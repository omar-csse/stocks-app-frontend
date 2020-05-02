import { useEffect, useState } from 'react';


const useFetch = (url, options, deps) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [res, setResponse] = useState({status: '', text: ''})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        fetch(url, options)
            .then(res => {
                setError(null)
                setResponse({status: res.status, text: res.statusText})
                return res.json()
            })
            .then(data => setData(data))
            .then(setLoading(false))
            .catch(err => setError(err))

    }, [url, options, deps])

    return { data, error, res, loading }
}

export default useFetch;