import { logout } from './auth.client'


const client = async (endpoint, body) => {

    const token = localStorage.getItem("_tkn")
    const headers = {'content-type': 'application/json'}

    if (token) headers.Authorization = `Bearer ${token}`

    const config = {
        method: body ? 'POST' : 'GET',
        headers: headers
    }    
    
    if (body) config.body = JSON.stringify(body)
  
    const res = await fetch(`https://stocksbe.omar.app/${endpoint}`, config)

    if (res.status === 401) logout()

    const data = await res.json()

    if (res.ok) return data
    else return Promise.reject({data, res})
}


export default client;