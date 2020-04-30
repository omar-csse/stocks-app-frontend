import { useEffect, useState } from 'react';


const useFetch = (url, options) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [res, setResponse] = useState(null)

    useEffect(() => {

        fetch(url, options)
            .then(res => {
                setResponse({status: res.status, text: res.statusText})
                return res.json()
            })
            .then(data => setData(data))
            .catch(err => {
                console.log("dsfsfsfsfsf")
                setError(err)
            })

    }, [url, options])

    return {data, error, res}
}

export default useFetch;