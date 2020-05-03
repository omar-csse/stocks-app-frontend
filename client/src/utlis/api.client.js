import { logout_noreload } from './auth.client'


const client = async (endpoint, body) => {

    const token = window.localStorage.getItem("_tkn")
    const headers = {'content-type': 'application/json'}

    if (token) headers.Authorization = `Bearer ${token}`

    const config = {
        method: body ? 'POST' : 'GET',
        headers: {'content-type': 'application/json'}
    }
    
    if (body) config.body = JSON.stringify(body)
  
    const res = await fetch(`http://131.181.190.87:3000/${endpoint}`, config)

    if (res.status === 401) logout_noreload()

    const data = await res.json()

    if (res.ok) return data
    else return Promise.reject(data)
}


export default client;