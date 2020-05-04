import React, { createContext, useMemo, useCallback } from 'react'
import useAsync from '../hooks/useAsync'
import * as auth_client from '../utlis/auth.client'
import Loading from '../components/Loading/Loading'
import Error from '../components/Error/Error'


const AuthContext = createContext()

const AuthProvider = (props) => {

    const { data, error, isLoading, isIdle, isError, isSuccess, setData } = useAsync()

    const login = useCallback(form => auth_client.login(form).then(islogged => setData(islogged)), [setData])
    const register = useCallback(form => auth_client.register(form), [])
    const logout = useCallback(() => auth_client.logout().then(islogged => setData(islogged)), [setData])
    
    const loggedIn = data ? data.islogged : auth_client.isLoggedIn();
    const value = useMemo(() => ({ login, logout, register, loggedIn}), [ login, logout, register, loggedIn])
    
    if (isLoading) return <Loading classes="spin-lg" />
    if (isError) return <Error error={error} res={{status: 500, message: 'SERVER ERROR'}} />
    if (isIdle || isSuccess) return <AuthContext.Provider value={value} {...props} />  
}
  

export { AuthProvider, AuthContext }