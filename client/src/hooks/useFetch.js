import { useEffect, useState } from 'react';


const useFetch = (url, options, deps) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [res, setResponse] = useState({status: '', text: ''})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const doFetch = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse({status: res.status, text: res.statusText})
                if (res.ok) {
                    setData(json) 
                    setError(null)
                }
                else setError(json);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        
        doFetch();

    }, [url, options, deps])

    return { data, error, res, loading }
}

export default useFetch;