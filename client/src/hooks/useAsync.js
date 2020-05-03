import { useCallback, useRef, useReducer, useLayoutEffect } from 'react'


const useSafeDispatch = (dispatch) => {
    const mounted = useRef(false)
    useLayoutEffect(() => {
        mounted.current = true
        return () => (mounted.current = false)
    }, [])

    return useCallback((...args) => (mounted.current ? dispatch(...args) : void 0), [dispatch])
}

const initialState = {status: 'idle', data: null, error: null}

const useAsync = () => {

    const [{status, data, error}, setState] = useReducer((s, a) => ({...s, ...a}), initialState)
    const safeSetState = useSafeDispatch(setState)

    const run = useCallback(promise => {
        if (!promise || !promise.then) {
            throw new Error(`The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`)
        }
        safeSetState({status: 'pending'})
        
        return promise.then(
            data => {
                safeSetState({data, status: 'resolved'})
                return data
            },
            error => { 
                safeSetState({status: 'rejected', error})
                return error
            })
    }, [safeSetState])

    const setData = useCallback(data => safeSetState({data}), [safeSetState])
    const setError = useCallback(error => safeSetState({error}), [safeSetState])
    const reset = useCallback(() => safeSetState(initialState), [safeSetState])

  return {
        isIdle: status === 'idle',
        isLoading: status === 'pending',
        isError: status === 'rejected',
        isSuccess: status === 'resolved',

        setData, setError, error, status, data, run, reset,
    }

}

export default useAsync