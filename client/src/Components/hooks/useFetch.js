import { useEffect, useState } from 'react';


const useFetch = (url, options) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)

        fetch(url, options)
            .then(res => res.json())
            .then(data => setData(data))
            .then(setIsLoading(false))
            .catch(err => setError(err))

    }, [url, options])

    return {data, error, isLoading}
}

export default useFetch;